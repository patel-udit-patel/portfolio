"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/types/blog";

type BlogCardProps = {
  blog: BlogPost;
  index: number;
};

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-blue-500 transition-colors group h-full"
    >
      <Link href={`/blog/${blog.slug}`} className="flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
          {blog.title}
        </h2>

        <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
          {blog.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center text-sm text-gray-500">
          <time dateTime={blog.date}>{blog.date}</time>
          <span className="group-hover:translate-x-1 transition-transform">
            Read more →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}