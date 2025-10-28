import axios from "axios";
import { ENV } from "../config/env";

const apiClient = axios.create({
    baseURL: ENV.API_URL,
    headers: {'Content-Type' : 'application/json'},
});

apiClient.interceptors.response.use(
    response => response,
    error => {
      console.error("API error:", error.response?.data || error.message);
      return Promise.reject(error);
    }
)

export default apiClient;



