import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SEO Heading */}
        <h2 className="text-4xl font-bold mb-6 text-white">
          Featured Software Engineering Projects
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl">
          These projects demonstrate my expertise in building scalable
          distributed systems, AI-driven applications, and full-stack cloud
          platforms.
        </p>

        {/* Added index to the map function below */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              index={index} // <--- Add this line
            />
          ))}
        </div>

      </div>
    </section>
  );
}