import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL, LOCAL_URL } from "./api-endpoints";
import { toast } from "react-toastify";
import { ResponseLanguageDictionaryFa } from "language";

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
    displayError(error);
    return Promise.reject(error);
  }
);
mainAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    displayError(error);
    return Promise.reject(error);
  }
);

const displayError = (error: AxiosError) => {
  if (error.code === "ERR_NETWORK") {
    toast.error(ResponseLanguageDictionaryFa.yourInternetIsOut);
    return;
  }
  if (!error.response) {
    toast.error(ResponseLanguageDictionaryFa.couldNotMakeRequest);
    return;
  } else {
    toast.error(ResponseLanguageDictionaryFa.serverError);
    return;
  }
};
export { baseAxios, mainAxios };
