import { blogs } from "@/data/data";
import Image from "next/image";

// ✅ generateStaticParams (needed for SSG export)
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function BlogDetails({ params }) {
  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) {
    return <h2 className="text-center mt-20 text-red-500">Blog not found</h2>;
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={350}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          {blog.title}
        </h1>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>✍️ {blog.author}</span>
          <span>📅 {blog.date}</span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {blog.content}
        </p>
      </div>
    </section>
  );
}
