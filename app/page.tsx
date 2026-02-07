"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Standard Next.js Image optimization
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
        {/* Container adjusted for side-by-side positioning on desktop */}
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* 1. TEXT SECTION - Adjusted to left-aligned on desktop */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            >
              Udit Patel
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 font-medium"
            >
              Backend & Microservices Engineer <br className="hidden md:block" />
              <span className="text-gray-500">| GenAI Explorer</span>
            </motion.h2>

            {/* Added Standard CTA - Important for UX */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Link 
                href="/projects" 
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                View Work
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* 2. PHOTO SECTION - Positioned on the right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center order-1 md:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative Ring - Standard for Dark Portfolios */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-800 translate-x-3 translate-y-3 shadow-2xl" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900">
                <Image
                  src="/images/profile.png" // Your profile photo path
                  alt="Udit Patel"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <ProjectsSection />
    </>
  );
}