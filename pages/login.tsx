import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks";
import LoginForm from "@/components/auth/login-form";
import { LoginPayload } from "@/models";
type loginProps = {};

export default function login(props: loginProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });
  const handleLoginClick = async (value: LoginPayload) => {
    try {
      login(value);
      router.push("/swr");
    } catch (error) {
      console.log("failed to login", error);
    }
  };

  const handleLogoutClick = async () => {
    try {
      logout();
    } catch (error) {
      console.log("failed to logout");
    }
  };
  if (profile?.username) router.push("/");
  return (
    <div>
      <h1>Login page</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <LoginForm onSubmit={handleLoginClick}></LoginForm>
      <button
        className="p-2 mx-3 font-bold bg-blue-300 rounded-lg"
        onClick={handleLogoutClick}
      >
        Log out
      </button>
      <button
        className="p-2 mx-3 font-bold bg-blue-300 rounded-lg"
        onClick={() => router.push("/swr")}
      >
        Go to about
      </button>
    </div>
  );
}
