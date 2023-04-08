import { Blog } from "@/models";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
type BlogDetailProps = {
  blog: Blog;
};

export default function BlogDetail({ blog }: BlogDetailProps) {
  let content = String(blog.attributes.content);
  content = content.replaceAll(
    "](/uploads",
    "](https://backoffice.nodemy.vn/uploads"
  );
  return (
    <div>
      <p>{blog.attributes.title}</p>
      {content ? (
        <ReactMarkdown>{content}</ReactMarkdown>
      ) : (
        "Bài viết không tồn tại"
      )}
    </div>
  );
}
