import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { thirdInsuranceStore } from "types/types";

const initialState = {
  company: "",
  discount: {
    insurance: "",
    person: "",
  },
  vehicle: {
    type: "",
    usage: "",
  },
};
const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    changeVehicleType(
      state: thirdInsuranceStore,
      action: PayloadAction<string>
    ) {
      state.vehicle.type = action.payload;
      state.vehicle.usage = "";
    },
    changeVehicleUsage(
      state: thirdInsuranceStore,
      action: PayloadAction<string>
    ) {
      state.vehicle.usage = action.payload;
    },
    changeCompany(state: thirdInsuranceStore, action: PayloadAction<string>) {
      state.company = action.payload;
    },
    changeThirdDiscount(
      state: thirdInsuranceStore,
      action: PayloadAction<string>
    ) {
      state.discount.insurance = action.payload;
    },
    changePersonDiscount(
      state: thirdInsuranceStore,
      action: PayloadAction<string>
    ) {
      state.discount.person = action.payload;
    },
  },
});

export const insuranceReducer = insuranceSlice.reducer;
export const {
  changeVehicleType,
  changeVehicleUsage,
  changeCompany,
  changeThirdDiscount,
  changePersonDiscount,
} = insuranceSlice.actions;
