// api/axiosClient.js
import axios from "axios";

const API_KEY = " f1e855a6d7007045924d68cb30ed82ae";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer" + API_KEY,
  },
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
