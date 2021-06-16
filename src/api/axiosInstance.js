import axios from "axios";
import eventHub from "@/plugins/eventHub";
import lsKeys from "@/lib/localstorageKeys";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

let reqStack = 0;

axiosInstance.interceptors.response.use(
  (response) => {
    reqStack--;
    eventHub.$emit("after-response");
    if (reqStack === 0) {
      eventHub.$emit("responses-complete");
    }
    return response;
  },
  (error) => {
    reqStack--;
    eventHub.$emit("response-error");
    console.log("Axios response error", { error });
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  async (config) => {
    reqStack++;
    const value = localStorage.getItem(lsKeys.AUTH_TOKEN);
    eventHub.$emit("request-start");
    if (!value) return config;
    config.headers = {
      authorization: `${value}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },

  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
