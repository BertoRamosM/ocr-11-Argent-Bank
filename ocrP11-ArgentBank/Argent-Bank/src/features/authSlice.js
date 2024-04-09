import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberMe }, {
    //provided by redux
    rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email,
          password,
        }
      );
      const { token } = response.data.body;

      if (rememberMe) {
        localStorage.setItem("token", token);
      } 

      return token;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    token: null,
    error: null,
  },
  reducers: {
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload;
        console.log(state.token)
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.token = null;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
