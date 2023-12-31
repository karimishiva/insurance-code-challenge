import {
  GET_ALL_VEHICLES,
  GET_ALL_COMPANIES,
  GET_ALL_DISCOUNTS,
} from "api/api-endpoints";
import { mainAxios } from "api/axios";
import { getCompaniesType, getVehicleType } from "types/types";

export const getVehiclesAPI = async () => {
  const response: getVehicleType = await mainAxios.get(GET_ALL_VEHICLES);
  return response.data;
};
export const getCompaniesAPI = async () => {
  const response: getCompaniesType = await mainAxios.get(GET_ALL_COMPANIES);
  return response.data;
};

export const getDiscountsAPI = async () => {
  const response: getCompaniesType = await mainAxios.get(GET_ALL_DISCOUNTS);
  return response.data;
};
