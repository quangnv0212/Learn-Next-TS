import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../common/Header"), { ssr: false });
export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-grow main">{children}</div>
      <Footer></Footer>
    </div>
  );
}
