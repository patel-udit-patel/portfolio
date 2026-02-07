"use client";

import { motion } from "framer-motion";

export default function ExperienceTimeline({ experiences }: any) {
  return (
    <>
      {/* Header Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Professional Experience
        </motion.h1>

        <p className="text-gray-400">
          My journey building scalable backend services, microservices
          architecture, and full stack enterprise applications.
        </p>

      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto">

        {experiences.map((exp: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative border-l border-gray-700 pl-8 mb-16"
          >

            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-2" />

            <h2 className="text-2xl font-semibold">
              {exp.role}
            </h2>

            <h3 className="text-blue-400 font-medium">
              {exp.company}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              {exp.duration}
            </p>

            <p className="text-gray-400 mb-6">
              {exp.description}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold mb-3">
                Key Contributions
              </h4>

              <ul className="space-y-2 text-gray-400">
                {exp.achievements.map((item: string) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-gray-800 px-3 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </section>
    </>
  );
}
