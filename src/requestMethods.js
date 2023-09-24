import axios from "axios";

const BASE_URL = "https://api.rockmetaltshirt.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
userRequest.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    const currentUser = user && JSON.parse(user).currentUser;
    const accessToken = currentUser?.accessToken;
    const token = sessionStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["token"] = `Bearer ${accessToken ? accessToken : token}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
