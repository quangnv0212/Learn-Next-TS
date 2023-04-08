/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { Blog } from "@/models";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
type indexProps = {
  blogs: Blog[];
};

export default function AlbumPage({ blogs }: indexProps) {
  const [listOfBlogs, setListOfBlogs] = useState<Blog[]>(blogs);
  const [numberOfBlog, setNumberOfBlog] = useState<number>();
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };
  const onChange: PaginationProps["onShowSizeChange"] = async (
    current,
    pageSize
  ) => {
    const res = await fetch(
      `https://backoffice.nodemy.vn/api/blogs?pagination[page]=${current}&pagination[pageSize]=${pageSize}&populate=*`
    );
    const { data } = await res.json();
    setListOfBlogs(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const resAllProduct = await fetch(
        "https://backoffice.nodemy.vn/api/blogs"
      );
      const { data } = await resAllProduct.json();
      setNumberOfBlog(data.length);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Blog Page</h1>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {listOfBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
      <Pagination
        showSizeChanger={true}
        onChange={onChange}
        pageSizeOptions={[2, 3, 4]}
        defaultCurrent={1}
        defaultPageSize={2}
        onShowSizeChange={onShowSizeChange}
        total={numberOfBlog}
      />
    </>
  );
}
export const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async (
  context
) => {
  const res = await fetch(
    "https://backoffice.nodemy.vn/api/blogs?pagination[page]=1&pagination[pageSize]=3&populate=*"
  );
  const { data } = await res.json();
  const blogs: Blog[] = data;
  return {
    props: {
      blogs,
    },
  };
};

// Read all markdown file => parse markdown file to JS object (greymatter) => pass result to component props
