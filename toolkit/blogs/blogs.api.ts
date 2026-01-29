import { commonApi } from "../common.api";

export interface WordPressBlogPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
}

export const blogsApi = commonApi.injectEndpoints({
  endpoints: (build) => ({
    getBlogPosts: build.query<WordPressBlogPost[], void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_BLOG_ENDPOINT}wp-json/wp/v2/posts`,
        method: "GET",
      }),
    }),
    getBlogPostById: build.query<WordPressBlogPost, number>({
      query: (id) => ({
        url: `${process.env.NEXT_PUBLIC_BLOG_ENDPOINT}wp-json/wp/v2/posts/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetBlogPostsQuery, useGetBlogPostByIdQuery } = blogsApi;
