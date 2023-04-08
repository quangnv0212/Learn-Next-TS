import React from "react";
import Link from "next/link";
import { Blog } from "@/models";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="cursor-pointer group" key={blog.id}>
      <div className="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105 aspect-square">
        <span
          style={{
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "absolute",
            inset: 0,
          }}
        >
          <Link href={`blogs/${blog.attributes.slug}`}>
            <img
              alt="Thumbnail"
              sizes="80vw"
              src={`https://backoffice.nodemy.vn${blog.attributes.image.data.attributes.url}`}
              decoding="async"
              data-nimg="fill"
              className="absolute inset-0 block object-cover w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 m-auto transition-all border-none"
            />
            <noscript />
          </Link>
        </span>
        ;
      </div>
      <div className="flex gap-3">
        <Link href="/#">
          <span className="inline-block mt-5 text-xs font-medium tracking-wider text-blue-600 uppercase">
            Design
          </span>
        </Link>
        <Link href="/#">
          <span className="inline-block mt-5 text-xs font-medium tracking-wider text-purple-600 uppercase">
            Lifestyle
          </span>
        </Link>
      </div>
      <Link
        href={`/blogs/${blog.attributes.slug}`}
        className="mt-2 text-lg font-semibold tracking-normal text-brand-primary"
      >
        <span className=" hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
          {blog.attributes.title}
        </span>
      </Link>
      <div className="hidden">
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
          <a href="/post/14-architectural-design-ideas-for-spacious-interior">
            It is a cliche philosophical question, but it touches on something
            fundamental about how humans relate to the world around them.{" "}
          </a>
        </p>
      </div>
      <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-5 h-5">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "absolute",
                inset: 0,
              }}
            >
              <img
                alt="Mario Sanchez"
                sizes="30px"
                srcSet="https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=16&q=75&fit=clip&auto=format 16w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=32&q=75&fit=clip&auto=format 32w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=48&q=75&fit=clip&auto=format 48w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=64&q=75&fit=clip&auto=format 64w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=96&q=75&fit=clip&auto=format 96w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=128&q=75&fit=clip&auto=format 128w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=256&q=75&fit=clip&auto=format 256w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=384&q=75&fit=clip&auto=format 384w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=640&q=75&fit=clip&auto=format 640w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=750&q=75&fit=clip&auto=format 750w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=828&q=75&fit=clip&auto=format 828w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=1080&q=75&fit=clip&auto=format 1080w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=1200&q=75&fit=clip&auto=format 1200w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=1920&q=75&fit=clip&auto=format 1920w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=2048&q=75&fit=clip&auto=format 2048w, https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=3840&q=75&fit=clip&auto=format 3840w"
                src="https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=3840&q=75&fit=clip&auto=format"
                decoding="async"
                data-nimg="fill"
                className="rounded-full"
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
              <noscript />
            </span>
          </div>
          <span className="text-sm">Mario Sanchez</span>
        </div>
        <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
        <time className="text-sm" dateTime="2022-10-21T06:05:00.000Z">
          October 21, 2022
        </time>
      </div>
    </div>
  );
}
