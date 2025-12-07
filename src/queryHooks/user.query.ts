import { useQuery } from "@tanstack/react-query";
import userApi from "@/api/user.api";

const useUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return (await userApi.getUser()) || null;
    },
  });

export { useUser };
