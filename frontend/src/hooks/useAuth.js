import { useContext, useEffect } from "react";

import { AuthContext } from "../contexts/Context";
import Axios from "../utils/axios";

const useAuth = () => {
  const { auth } = useContext(AuthContext);

  const http = useEffect(() => {
    Axios.interceptors.request.use(
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

    return Axios;
  }, [auth]);

  return http;
};

export default useAuth;
