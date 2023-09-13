import { GET_ALL_VEHICLES } from "api/api-endpoints";
import { mainAxios } from "api/axios";
import { getVehicleType } from "types/types";

export const getVehiclesAPI = async () => {
  const response: getVehicleType = await mainAxios.get(GET_ALL_VEHICLES);
  return response.data;
};
