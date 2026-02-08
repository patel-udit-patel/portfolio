import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Use react-icons
import { MdEmail } from "react-icons/md"; // For email icon

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand + About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Udit Patel
          </h2>

          <p className="text-sm leading-relaxed">
            Software Engineer specializing in Microservices, Spring Boot,
            Cloud Architecture and Full Stack Development. Passionate about
            building scalable and secure enterprise applications.
          </p>
        </div>

        {/* SEO Internal Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/experience" className="hover:text-blue-400 transition">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Connect With Me
          </h3>

          <div className="flex space-x-4 mb-4">

            <a
              href="https://github.com/patel-udit-patel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="GitHub Profile"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/udit-patel-a3992623b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:youremail@example.com"
              className="hover:text-blue-400 transition"
              aria-label="Send Email"
            >
              <MdEmail size={22} />
            </a>

          </div>

          <p className="text-sm">
            Email: udit0428t@gmail.com
          </p>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-800 text-center py-6 text-sm">
        © {new Date().getFullYear()} Udit Patel. All rights reserved.
      </div>
    </footer>
  );
}
