import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL, LOCAL_URL } from "./api-endpoints";

const baseAxios = axios.create({
  baseURL: LOCAL_URL,
  headers: {
    "Accept-Language": "fa",
  },
});
const mainAxios = axios.create({
  baseURL: BASE_URL,
});
baseAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // toast.error(error.response.data.message)
    return Promise.reject(error);
  }
);
mainAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // toast.error(error.response.data.message)
    return Promise.reject(error);
  }
);

export { baseAxios, mainAxios };
