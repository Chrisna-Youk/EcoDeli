import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

export const useRequest = (endpoint, keys) => {
  const http = useAuth();
  return useQuery({
    queryKey: Array.isArray(keys) ? keys : Array(keys),
    queryFn: async () => {
      const response = await http.get(endpoint, {}, { withCredentials: true });
      return response.data;
    },
  });
};
