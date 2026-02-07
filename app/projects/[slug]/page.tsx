import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Metadata } from "next";

// SEO Optimization: Dynamic Metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: `${project?.title || "Project"} | Udit Patel`,
    description: project?.description || "Technical case study of a software engineering project.",
  };
}

// SSG Optimization: Pre-renders pages at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20 lg:py-32">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Back */}
        <Link href="/projects" className="text-blue-400 hover:text-blue-300 mb-8 inline-block transition-colors">
          ← Back to Projects
        </Link>

        {/* Hero Header */}
        <header className="mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-sm text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </header>

        {/* Architecture & Problem Section */}
        <div className="grid gap-16">
          
          <FadeIn delay={0.1}>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">The Problem</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{project.problem}</p>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-white">Technical Architecture</h2>
              <p className="text-gray-400 mb-6">{project.architecture}</p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Key Features:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-green-400">The Solution & Impact</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{project.solution}</p>
            </section>
          </FadeIn>

          {/* Links Section */}
          <FadeIn delay={0.4}>
            <div className="flex gap-4 pt-8 border-t border-gray-900">
              {project.github && (
                <a href={project.github} target="_blank" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
                  View Source Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" className="px-6 py-3 border border-gray-700 font-bold rounded-lg hover:bg-gray-900 transition">
                  Live Demo
                </a>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}