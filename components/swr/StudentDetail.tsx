import React from "react";
import useSWR from "swr";
type StudentDetailProps = {
  slugBlog: string;
};

export default function StudentDetail({ slugBlog }: StudentDetailProps) {
  const { data, error, isLoading, mutate } = useSWR(`/blogs/${slugBlog}`, {
    // revalidateOnFocus: false,
  });
  return <div>Name: {data?.data?.attributes?.title || "--"}</div>;
}
