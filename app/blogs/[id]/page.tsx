"use client";

import { useGetBlogPostByIdQuery } from "@/toolkit/blogs/blogs.api";
import { useParams } from "next/navigation";
import { Loader } from "@/components/ui/Loader";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./styles.css";

export default function BlogDetail() {
  const params = useParams();
  const blogId = parseInt(params.id as string);

  const { data: blogPost, isLoading, error } = useGetBlogPostByIdQuery(blogId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">Blog post not found</h1>
        <p className="mt-4 text-gray-600">
          The blog post you&apos;re looking for doesn&apos;t exist or
          couldn&apos;t be loaded.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  // Function to create a clean HTML content
  const createMarkup = () => {
    return { __html: blogPost.content.rendered };
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 mt-10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: blogPost.title.rendered }}
            />

            <div className="flex items-center text-gray-500 mb-8">
              <Calendar className="h-4 w-4 mr-2" />
              <time dateTime={blogPost.date}>
                {format(new Date(blogPost.date), "MMMM d, yyyy")}
              </time>
            </div>

            {blogPost.jetpack_featured_media_url && (
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={blogPost.jetpack_featured_media_url}
                  alt={blogPost.title.rendered}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div
              className="blog-content"
              dangerouslySetInnerHTML={createMarkup()}
            />
          </motion.div>
        </article>
      </div>
    </div>
  );
}
