import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";

// 1. Static Metadata for the Listing Page
export const metadata: Metadata = {
  title: "Technical Blogs | Udit Patel",
  description: "Deep dives into Spring Boot, Microservices, Full Stack Development, and Cloud Architecture by Udit Patel.",
  alternates: {
    canonical: "https://your-domain.com/blog",
  },
  openGraph: {
    title: "Technical Blogs | Udit Patel",
    description: "Deep dives into Spring Boot, Microservices, and Full Stack Development.",
    type: "website",
    url: "https://your-domain.com/blog",
  },
};

export default function BlogPage() {
  // Sort blogs by date (newest first) if not already sorted in data
  const sortedBlogs = [...blogs].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <section className="max-w-5xl mx-auto">
        
        {/* Semantic Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Technical Blogs
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Insights, tutorials, and architectural patterns from my journey in software engineering.
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {sortedBlogs.map((blog, index) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
              index={index}
            />
          ))}
        </div>

      </section>
    </main>
  );
}