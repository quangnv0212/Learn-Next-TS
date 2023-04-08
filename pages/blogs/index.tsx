/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { Blog } from "@/models";
type indexProps = {
  blogs: Blog[];
};

export default function AlbumPage({ blogs }: indexProps) {
  return (
    <>
      <h1 className="text-5xl font-bold text-center">Blog Page</h1>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </>
  );
}
export const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async (
  context
) => {
  const res = await fetch("https://backoffice.nodemy.vn/api/blogs?populate=*");
  const { data } = await res.json();
  const blogs: Blog[] = data;
  return {
    props: {
      blogs,
    },
  };
};

// Read all markdown file => parse markdown file to JS object (greymatter) => pass result to component props
