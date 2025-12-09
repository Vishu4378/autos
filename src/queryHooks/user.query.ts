import { useQuery } from "@tanstack/react-query";
import userApi from "@/api/user.api";

const useUserInfo = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return (await userApi.getUser()) || null;
    },
  });

export { useUserInfo };
