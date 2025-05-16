import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/Context";
import Axios from "../utils/axios";

const useAuth = () => {
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    Axios.interceptors.request.use(
      (config) => {
        if (auth) {
          config.headers.Authorization = `Bearer ${auth}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }, [auth]);

  return Axios;
};

export default useAuth;
