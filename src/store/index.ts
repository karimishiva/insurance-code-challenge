import { configureStore } from "@reduxjs/toolkit";
import { userReducer, register } from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
export { register };
