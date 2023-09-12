import { SIGN_UP_URL } from "api/api-endpoints";
import { baseAxios } from "api/axios";
import { userInfo } from "types/types";

export const signupAPI = async (data: userInfo) => {
  const response = await baseAxios.post(SIGN_UP_URL, data);
  return response.data;
};
