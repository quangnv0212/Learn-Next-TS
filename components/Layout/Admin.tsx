import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";
import AuthComponent from "../common/Auth";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

export function AdminLayout({ children }: LayoutProps) {
  const { profile, login, logout, isLoading } = useAuth({
    revalidateOnMount: false,
  });
  const router = useRouter();
  const handleLogoutClick = async () => {
    try {
      logout();
      router.push("/login");
    } catch (error) {
      console.log("failed to logout");
    }
  };
  return (
    <AuthComponent>
      <h1>Admin Layout</h1>
      <div className="">Sidebar</div>
      <p>Profile: {JSON.stringify(profile)}</p>
      <button onClick={handleLogoutClick}>Log out</button>
      <Link href={"/"}>Home </Link>
      <Link href={"/blogs"}>Blogs </Link>
      <div className="">{children}</div>
    </AuthComponent>
  );
}
