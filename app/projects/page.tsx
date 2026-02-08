import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Engineering Portfolio | Udit Patel",
  description:
    "Showcase of scalable microservices, GenAI integrations, and cloud-native solutions built by Udit Patel using Spring Boot, Next.js, and AWS.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Project Portfolio | Udit Patel",
    description: "Technical case studies on backend architecture and distributed systems.",
    type: "website",
  },
};

export default function ProjectsPage() {
  // SEO: Structured Data for the list of projects
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": `https://yourdomain.com/projects/${project.slug}`,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20">
      {/* Injecting Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Featured Projects
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          A collection of distributed systems, AI implementations, and 
          architectural experiments. Each project focuses on 
          <span className="text-gray-200"> scalability, performance, and clean code.</span>
        </p>
      </header>

      {/* Grid Layout: Using 2 columns on medium screens for better readability */}
      <section 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        aria-label="Software Engineering Projects Grid"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </section>

      {/* Optional: GitHub CTA
      <footer className="mt-20 text-center">
        <p className="text-gray-300 mb-4">Want to see more code?</p>
        <a 
          href="https://github.com/your-username" 
          className="inline-flex items-center gap-2 px-5 py-2 border border-gray-800 rounded-full hover:bg-gray-900 transition-colors"
        >
          View GitHub Profile →
        </a>
      </footer> */}
    </main>
  );
}