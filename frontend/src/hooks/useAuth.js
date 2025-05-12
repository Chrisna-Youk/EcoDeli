import { useContext, useMemo } from "react";

import axios from "axios";
import { AuthContext } from "../context/auth/AuthContext";

const useAuth = () => {
  const { auth } = useContext(AuthContext);

  const http = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": navigator.language || "en-US",
      },
      withCredentials: true,
    });

    instance.interceptors.request.use(
      (config) => {
        if (auth) {
          config.headers.Authorization = `Bearer ${auth}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    return instance;
  }, [auth]);

  return http;
};

export default useAuth;
