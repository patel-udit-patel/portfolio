import FadeIn from "@/components/FadeIn"; // Reuse your safe wrapper
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <FadeIn direction="left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                Udit Patel
              </h1>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-medium">
                Backend & Microservices Engineer <br className="hidden md:block" />
                <span className="text-gray-500">| GenAI Explorer</span>
              </h2>
            </FadeIn>
          </div>

          <div className="flex-1 flex justify-center order-1 md:order-2">
             <FadeIn direction="right" delay={0.4}>
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full border-2 border-gray-800 translate-x-3 translate-y-3 shadow-2xl" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
                    <Image
                      src="/images/profile.png"
                      alt="Udit Patel"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      priority
                    />
                  </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </main>

      <ProjectsSection />
    </>
  );
}