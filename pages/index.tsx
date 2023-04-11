import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "@/components/Layout";
import { AppPropsWithLayout, NextPageWithLayout } from "@/models";
import { Layout } from "antd";

export default function Home(): AppPropsWithLayout {
  return <>Home Page</>;
}

Home.Layout = MainLayout;
