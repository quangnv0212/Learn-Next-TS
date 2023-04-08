import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Blog } from "@/models";
import BlogDetail from "@/components/BlogDetail";
import SeoComponent from "@/components/Seo";

type slugAlbumProps = {
  blog: Blog;
};

export default function BlogPage({ blog }: slugAlbumProps) {
  if (!blog) return null;
  return (
    <>
      <SeoComponent
        data={{
          title: blog.attributes.seo?.metaTitle,
          description: blog.attributes.seo?.metaDescription,
          thumbnailUrl: blog.attributes.image.data.attributes.url,
          url: blog.attributes.slug,
        }}
      ></SeoComponent>
      <BlogDetail blog={blog}></BlogDetail>;
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://backoffice.nodemy.vn/api/blogs?populate=*");
  const { data } = await res.json();
  const blogList: Blog[] = data;
  return {
    paths: blogList.map((blog: Blog) => ({
      params: { slugBlog: blog.attributes.slug },
    })),
    fallback: false, // See the "fallback" section below
  };
};
export const getStaticProps: GetStaticProps<{ blog: Blog }> = async (
  context
) => {
  const res = await fetch("https://backoffice.nodemy.vn/api/blogs?populate=*");
  const { data: blogList } = await res.json();
  const slug = context.params?.slugBlog;
  if (!slug) return { notFound: true };
  const blog = blogList.find((x: Blog) => x.attributes.slug == slug);
  if (!blog) return { notFound: true };
  console.log(blog);
  return {
    props: {
      blog,
    },
  };
};

// 1 file markdown => 1 file  html

//get  static path: read markdown, find  slug , pass to context params
//get static props: get slug => tìm bài blog tuong ứng => convert markdown to html string => pass blog detail to props
