import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectCaseStudy({ params }: any) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">
      
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-bold mb-6">
          {project.title}
        </h1>

        {/* Overview */}
        <p className="text-gray-400 mb-10">
          {project.description}
        </p>

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Problem Statement
          </h2>

          <p className="text-gray-400">
            {project.problem}
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            System Architecture
          </h2>

          <p className="text-gray-400">
            {project.architecture}
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Key Features
          </h2>

          <ul className="list-disc ml-6 text-gray-400 space-y-2">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 px-4 py-2 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="flex gap-6 mt-10">
          <a
            href={project.github}
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
          >
            View GitHub
          </a>

          <a
            href={project.demo}
            className="border border-gray-600 px-6 py-3 rounded hover:border-white"
          >
            Live Demo
          </a>
        </section>

      </div>

    </main>
  );
}
