import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInfo } from "types/types";
const initialState: userInfo = {
  firstName: localStorage.getItem("firstName") || "",
  lastName: localStorage.getItem("lastName") || "",
  mobile: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state: userInfo, action: PayloadAction<userInfo>) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.mobile = action.payload.mobile;
      state.password = action.payload.password;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { register } = userSlice.actions;
