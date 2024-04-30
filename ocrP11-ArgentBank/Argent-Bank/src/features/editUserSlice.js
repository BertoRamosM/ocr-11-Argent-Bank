import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {

            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
      );
      return response.data.body;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const updateUserName = createAsyncThunk(
  "profile/updateUserName",
  async (userName, thunkAPI) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        }
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
      console.log(state.userName)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.userName = action.payload.userName;
        console.log("username updated correctly")
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.error = action.payload.message;
        console.error("error updating the state")
      });
  },
});

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;
