import { useMutation } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import Axios from "../utils/axios.js"

export const useMutate = (endpoint, keys) => {
  // const http = useAuth();
  return useMutation({
    mutationKey: Array.isArray(keys) ? keys : Array(keys),
    mutationFn: async (data) => {
      const response = await Axios.post(endpoint, data);
      return response.data;
    },
  });
};
