import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";
import AuthComponent from "../common/Auth";

export function AdminLayout({ children }: LayoutProps) {
  return (
    <AuthComponent>
      <h1>Admin Layout</h1>
      <div className="">Sidebar</div>
      <Link href={"/"}>Home </Link>
      <Link href={"/blogs"}>Blogs </Link>
      <div className="">{children}</div>
    </AuthComponent>
  );
}
