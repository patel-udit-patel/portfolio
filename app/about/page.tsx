import { motion } from "framer-motion";

export const metadata = {
  title: "About Udit Patel | Software Engineer",
  description:
    "Learn about Udit Patel, a full stack software engineer specializing in Spring Boot microservices, cloud-native applications, and AI powered solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-20">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          About Me
        </motion.h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          I'm <span className="text-white font-semibold">Udit Patel</span>, a
          full stack software engineer passionate about building scalable,
          high-performance applications using modern backend architecture,
          cloud technologies, and AI-driven solutions.
        </p>

      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-20">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            My Engineering Journey
          </h2>

          <p className="text-gray-400 leading-relaxed">
            My journey in software development started with a deep curiosity
            about how scalable systems work behind real-world applications.
            Over time, I specialized in backend development using Java and
            Spring Boot while also building full stack applications using React
            and Next.js.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            What I Love Building
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I enjoy designing distributed microservices, implementing secure
            authentication systems, integrating payment gateways, and exploring
            Generative AI applications that solve real-world business problems.
          </p>
        </motion.div>

      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mb-20">

        <h2 className="text-3xl font-semibold mb-10 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Backend Development",
              skills: [
                "Spring Boot",
                "Microservices",
                "REST APIs",
                "JWT Security",
                "Spring Cloud",
              ],
            },
            {
              title: "Frontend Development",
              skills: [
                "React",
                "Next.js",
                "Tailwind CSS",
                "Responsive UI",
              ],
            },
            {
              title: "Cloud & Tools",
              skills: [
                "Docker",
                "AWS",
                "GitHub Actions",
                "Stripe Integration",
              ],
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2 text-gray-400">
                {category.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </section>

      {/* Personal Touch Section */}
      <section className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-6">
          Beyond Coding
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Outside of development, I stay motivated by continuous learning,
          exploring emerging technologies, and drawing inspiration from
          high-performing professionals. I strongly believe in writing clean,
          scalable, and maintainable software that delivers real impact.
        </p>

      </section>

    </main>
  );
}
