import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAuthToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token");

export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        { headers: { Authorization: `Bearer ${getAuthToken()}` } }
      );
      return response.data.body;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const updateUserName = createAsyncThunk(
  "profile/updateUserName",
  async (newUserName, thunkAPI) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName: newUserName },
        { headers: { Authorization: `Bearer ${getAuthToken()}` } }
      );
      return response.data.body;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    error: null,
  },
  reducers: {
    editProfile: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        const { email, firstName, lastName, userName } = action.payload;
        state.email = email;
        state.firstName = firstName;
        state.lastName = lastName;
        state.userName = userName;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.userName = action.payload.userName;
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.error = action.payload.message;
      });
  },
});

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;
