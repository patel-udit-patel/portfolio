import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// 1. Dynamic Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Udit Patel`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: ["Udit Patel"],
      url: `https://your-domain.com/blog/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default function BlogDetail({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  // 2. JSON-LD Structured Data (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    datePublished: blog.date,
    dateModified: blog.date, // Update this if you have a 'lastUpdated' field
    description: blog.description,
    author: {
      "@type": "Person",
      name: "Udit Patel",
      url: "https://your-domain.com"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://your-domain.com/blog/${blog.slug}`
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      
      {/* Inject Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto">
        
        {/* Article Header */}
        <header className="mb-10 pb-10 border-b border-gray-800">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>Software Engineering</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {/* NOTE: In a real app, you would render markdown here.
             Example: <Markdown>{blog.content}</Markdown> 
          */}
          <p className="lead text-xl text-gray-200 mb-8">
            {blog.description}
          </p>
          
          <p>
            [Content Placeholder] This is where the full technical breakdown would go. 
            Since this is utilizing Semantic HTML (`article`, `h1`, `time`), 
            search engines can easily parse the structure of your content.
          </p>
          
          <h3>Key Takeaways</h3>
          <ul>
            <li>Optimization of Next.js 14 App Router</li>
            <li>Server Side Rendering vs Client Components</li>
            <li>Structured Data implementation</li>
          </ul>
        </div>

      </article>
    </main>
  );
}