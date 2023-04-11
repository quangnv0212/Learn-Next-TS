import { authApi } from "@/api-client";
import { LoginPayload } from "@/models";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    isLoading,
    mutate,
  } = useSWR("/users/me", {
    dedupingInterval: 60000,
    revalidateOnFocus: false,
    ...options, // giống kiểu truyền prop
  });
  // khi login logout phải mutate data
  const login = async (payload: LoginPayload) => {
    try {
      await authApi.login({
        ...payload,
      });
      await mutate(); //chưa có data tạm thì để rỗng cũng ok
    } catch (error) {
      console.log("error");
    }
  };
  //check xem lúc vừa vào trang để get API. Cái này giống kiểu initState. Lưu ý ko dùng undefined cho các mutate vì nó là set lại state ban đầu rồi
  const firstLoading = profile === undefined && error === undefined;
  const logout = async () => {
    await authApi.logout();
    await mutate({}, false); // để dữ liệu rỗng và ko gọi lại api
  };

  return {
    profile,
    error,
    isLoading,
    login,
    logout,
    firstLoading,
  };
}
