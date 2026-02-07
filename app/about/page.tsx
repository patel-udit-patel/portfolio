import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SkillCard from "@/components/SkillCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Udit Patel | Software Engineer",
  description: "Learn about Udit Patel's journey in backend engineering and microservices.",
};

const skillCategories = [
  { title: "Backend Core", skills: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "Redis", "REST/GraphQL"] },
  { title: "Frontend & UI", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { title: "DevOps & Tools", skills: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Jira/Agile"] },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-20 lg:py-32">
      
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center mb-24">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">About Me</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl text-gray-400 leading-relaxed">
            I'm <span className="text-white font-semibold">Udit Patel</span>, a 
            Software Engineer dedicated to architecting <span className="text-blue-400">scalable distributed systems</span>.
          </p>
        </FadeIn>
      </header>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-32 items-center">
        <FadeIn direction="left">
          <h2 className="text-3xl font-bold mb-6">My Engineering Journey</h2>
          <div className="space-y-4 text-gray-400 text-lg">
            <p>Today, I specialize in the Java/Spring Boot ecosystem, focusing on cloud-native patterns.</p>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">What I Focus On</h2>
            <ul className="space-y-4">
              {["High-performance Microservices", "Event-Driven Architecture", "CI/CD Automation"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} {...cat} index={i} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <footer className="max-w-4xl mx-auto text-center py-16 border-t border-gray-900">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
            Let's Collaborate
          </Link>
        </div>
      </footer>
    </main>
  );
}