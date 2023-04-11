import { AdminLayout } from "@/components/Layout";
import StudentDetail from "@/components/swr/StudentDetail";
import { AppPropsWithLayout } from "@/models";
import React from "react";

export default function SWRPlayGround(props: AppPropsWithLayout) {
  return (
    <>
      <StudentDetail slugBlog="top-10-song-bac-khien-game-thu-lac-loi-trong-bong-toi"></StudentDetail>
      <StudentDetail slugBlog="top-10-song-bac-khien-game-thu-lac-loi-trong-bong-toi"></StudentDetail>
      <StudentDetail slugBlog="top-10-song-bac-khien-game-thu-lac-loi-trong-bong-toi"></StudentDetail>
    </>
  );
}
SWRPlayGround.Layout = AdminLayout;
