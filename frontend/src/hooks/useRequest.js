import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";

export const useRequest = (endpoint) => {
  return useQuery({
    queryFn: async () => {
      const response = await http.get(endpoint);
      return response.data;
    },
  });
};
