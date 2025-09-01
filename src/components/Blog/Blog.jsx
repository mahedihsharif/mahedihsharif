// components/BlogSection.js
"use client";
import { blogs } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Latest Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                  {blog.shortDesc}
                </p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
