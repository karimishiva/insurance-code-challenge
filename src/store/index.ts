import { configureStore } from "@reduxjs/toolkit";
import { userReducer, register } from "./slices/userSlice";
import {
  changeVehicleType,
  changeVehicleUsage,
  insuranceReducer,
} from "./slices/insuranceSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    insurance: insuranceReducer,
  },
});
export { register, changeVehicleType, changeVehicleUsage };
