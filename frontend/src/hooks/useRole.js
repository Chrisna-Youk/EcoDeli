import { useRequest } from "./useRequest";

export const useRole = () => {
  return useRequest("/auth/role", ["hello"]);
};
