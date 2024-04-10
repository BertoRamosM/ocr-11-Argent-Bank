import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"
import userReducer from "./features/editUserSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: userReducer,
  }
})