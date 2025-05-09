import { useMutation } from "@tanstack/react-query";
import http from "../utils/http";

export const useMutate = (endpoint, keys) => {
  return useMutation({
    mutationKey:  Array.isArray(keys) ? keys : Array(keys),
    mutationFn: async (data) => {
      const response = await http.post(endpoint, data);
      return response.data;
    },
  });
};
