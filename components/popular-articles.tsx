"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useGetBlogPostsQuery } from "@/toolkit/blogs/blogs.api";
import { Loader } from "./ui/Loader";

export function PopularArticles() {
  const { data: blogPosts, isLoading, error } = useGetBlogPostsQuery();

  // Function to strip HTML tags from rendered content
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  // Function to truncate text to a specific length
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Popular Articles</h2>
          <p className="text-gray-600">
            Stay informed with our latest insights and tips on automotive care and
            technology.
          </p>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">
            Failed to load blog posts. Please try again later.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts && blogPosts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blogs/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <Image
                        src={post.jetpack_featured_media_url || '/placeholder-blog.webp'}
                        alt={post.title.rendered}
                        className="w-full h-48 object-cover"
                        width={392}
                        height={192}
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {post.title.rendered}
                        </h3>
                        <p className="text-gray-600">
                          {truncateText(stripHtml(post.excerpt.rendered), 120)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
