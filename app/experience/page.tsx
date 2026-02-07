import { experiences } from "@/data/experiences";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata = {
  title: "Experience | Udit Patel Software Engineer",
  description:
    "Professional experience of Udit Patel, Software Engineer at Capgemini, specializing in Spring Boot microservices, distributed systems, and full stack development.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">

      {/* Header */}
      <ExperienceTimeline experiences={experiences} />

    </main>
  );
}
