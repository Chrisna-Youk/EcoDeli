import { useMutation } from "@tanstack/react-query";
import useAuth from "./useAuth";

export const useMutate = (endpoint, keys) => {
  const http = useAuth();
  return useMutation({
    mutationKey: Array.isArray(keys) ? keys : Array(keys),
    mutationFn: async (data) => {
      const response = await http.post(endpoint, data);
      return response.data;
    },
  });
};
