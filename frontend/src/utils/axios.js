import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": navigator.language || "en-US",
  },
  withCredentials: true,
});

export default Axios;
