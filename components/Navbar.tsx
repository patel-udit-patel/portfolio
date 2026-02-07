"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className="bg-gray-900 text-white px-6 md:px-12 py-4 sticky top-0 z-[100] border-b border-gray-800"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo / Name - SEO: Linked to Home */}
        <Link href="/" className="font-bold text-xl tracking-tight hover:text-blue-400 transition-colors">
          Udit Patel
        </Link>

        {/* Desktop Menu - SEO: Semantic List */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`${
                  pathname === link.href ? "text-white font-semibold" : "text-gray-400"
                } hover:text-white transition-colors duration-200`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800 mt-4 overflow-hidden"
          >
            <ul className="flex flex-col py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white px-2 py-1 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}