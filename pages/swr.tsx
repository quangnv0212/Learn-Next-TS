import { AdminLayout } from "@/components/Layout";
import StudentDetail from "@/components/swr/StudentDetail";
import React from "react";

type SWRPlayGround = {};

export default function SWRPlayGround(props: any) {
  const handleAddClick = () => {};
  return (
    <AdminLayout>
      <h1>Play ground</h1>
      <button onClick={handleAddClick}>Add detail</button>

      <StudentDetail slugBlog="top-10-song-bac-khien-game-thu-lac-loi-trong-bong-toi"></StudentDetail>
      <StudentDetail slugBlog="top-10-song-bac-khien-game-thu-lac-loi-trong-bong-toi"></StudentDetail>
      <StudentDetail slugBlog="top-10-song-bac-khien-game-thu-lac-loi-trong-bong-toi"></StudentDetail>
    </AdminLayout>
  );
}
SWRPlayGround.Layout = AdminLayout;
