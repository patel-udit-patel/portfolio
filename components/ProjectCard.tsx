"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }} // Subtle vertical lift is more standard than scale
      className="flex flex-col h-full border border-gray-700 p-6 rounded-lg bg-gray-900 transition-colors hover:border-gray-500"
    >
      {/* Header Section */}
      <header>
        <h3 className="text-2xl font-bold mb-3 tracking-tight">
          {project.title}
        </h3>
      </header>

      {/* Content Section */}
      <div className="flex-grow">
        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Section - Pushed to bottom by flex-grow above */}
      <footer className="mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group"
        >
          View Case Study 
          <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </footer>
    </motion.article>
  );
}