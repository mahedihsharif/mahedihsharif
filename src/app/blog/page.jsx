import Blog from "@/components/Blog/Blog";

export default function BlogPage() {
  return (
    <main className="pt-28 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-14">All Blogs</h1>
      <Blog all />
    </main>
  );
}
