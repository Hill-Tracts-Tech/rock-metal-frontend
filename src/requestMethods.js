import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_PRODUCTION === "YES"
    ? "https://api.rockmetaltshirt.com/api/"
    : "http://localhost:5002/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
userRequest.interceptors.request.use(
  (config) => {
    // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
    // const currentUser = user && JSON.parse(user).currentUser;
    // const accessToken = currentUser?.accessToken;
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers["token"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
