import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth.js";

export function useUser() {
  const {
    data: user,
    isPending,
    isFetching,
    fetchStatus,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return {
    user,
    isPending,
    isFetching,
    fetchStatus,
    isAuthenticated: user?.role === "authenticated",
  };
}
