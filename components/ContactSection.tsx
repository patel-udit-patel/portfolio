"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <>
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto mb-20">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Contact Me
        </motion.h1>

        <p className="text-gray-400">
          I'm open to software engineering opportunities, collaborations,
          and interesting technical discussions.
        </p>

      </section>

      {/* Contact Cards */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <MdEmail size={24} className="text-blue-400" />
            <h2 className="text-xl font-semibold">Email</h2>
          </div>
          <p className="text-gray-400">udit0428t@gmail.com</p>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <FaLinkedin size={24} className="text-blue-400" />
            <h2 className="text-xl font-semibold">LinkedIn</h2>
          </div>
          <a
            href="https://linkedin.com/in/udit-patel-a3992623b/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            View Profile
          </a>
        </motion.div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <FaGithub size={24} className="text-blue-400" />
            <h2 className="text-xl font-semibold">GitHub</h2>
          </div>
          <a
            href="https://github.com/patel-udit-patel"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            View Repositories
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-3">Location</h2>
          <p className="text-gray-400">India</p>
        </motion.div>

      </section>
    </>
  );
}
