"use client";

import { useGetBlogPostsQuery } from "@/toolkit/blogs/blogs.api";
import { Loader } from "@/components/ui/Loader";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";

export default function BlogListing() {
  const { data: blogPosts, isLoading, error } = useGetBlogPostsQuery();

  // Function to strip HTML tags from rendered content
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Function to truncate text to a specific length
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  // Function to estimate reading time
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime === 0 ? 1 : readingTime;
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 mt-10"
        >
          <h2 className="text-3xl font-bold mb-4">Our Blogs</h2>
          <p className="text-gray-600 text-lg">
            Stay informed with our latest insights and tips on automotive care
            and technology.
          </p>
        </motion.div>

        {/* Blog Posts */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-20">
            <p className="text-xl font-semibold">Failed to load blog posts</p>
            <p className="mt-2">Please try again later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts &&
              blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col h-full"
                >
                  <Link
                    href={`/blogs/${post.id}`}
                    className="flex flex-col h-full group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={
                            post.jetpack_featured_media_url ||
                            "/placeholder-blog.webp"
                          }
                          alt={post.title.rendered}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-4 w-4 mr-1" />
                            <time dateTime={post.date}>
                              {format(new Date(post.date), "MMM d, yyyy")}
                            </time>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>
                              {calculateReadingTime(
                                stripHtml(post.content.rendered)
                              )}{" "}
                              min read
                            </span>
                          </div>
                        </div>
                        <h2
                          className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                        <p className="text-gray-600 mb-4 flex-grow">
                          {truncateText(stripHtml(post.excerpt.rendered), 120)}
                        </p>
                        <div className="mt-auto">
                          <span className="inline-block text-blue-600 font-medium group-hover:underline">
                            Read more
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
