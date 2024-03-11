import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

const getToken = () => JSON.parse(localStorage.getItem("token"));

if (getToken()) {
  axiosInstance.defaults.headers["Authorization"] = `Bearer ${
    getToken().access
  }`;
}

console.log(axiosInstance.defaults.headers["Authorization"]);

export default axiosInstance;
