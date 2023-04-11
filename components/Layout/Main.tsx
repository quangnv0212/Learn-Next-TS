import { LayoutProps } from "@/models";
import Link from "next/link";
import React from "react";
import Header from "../common/Header";
import Footer from "./Footer";

export function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-grow main">{children}</div>
      <Footer></Footer>
    </div>
  );
}
