import { Image } from "./image";

export type Blog = {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    image: {
      data: Image;
    };
    seo?: {
      metaTitle: string;
      metaDescription: string;
    };
  };
};
