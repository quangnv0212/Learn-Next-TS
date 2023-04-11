import { authApi } from "@/api-client";
import { StorageKeys } from "@/constant";
import { LoginPayload, User } from "@/models";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

function getUserInfo(): User | null {
  try {
    return JSON.parse(localStorage.getItem(StorageKeys.USER_INFO)!);
  } catch (error) {
    console.log(error);
    return null;
  }
}
export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/users/me", {
    dedupingInterval: 60000,
    revalidateOnFocus: false,
    ...options, // giống kiểu truyền prop
    fallbackData: getUserInfo(),
    onSuccess(data) {
      localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data));
    },
    onError(err: any) {
      authApi.logout();
    },
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
    await mutate(null, false);
    localStorage.removeItem(StorageKeys.USER_INFO);
    // để dữ liệu rỗng và ko gọi lại api
  };

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
