import "./globals.css";
import type { Metadata } from "next";
import { personSchema } from "@/lib/structuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Udit Patel | Full Stack Developer",
  description:
    "Udit Patel is a Full Stack Developer specializing in Spring Boot, Microservices, MERN stack, and GenAI applications.",
  keywords: [
    "Udit Patel",
    "Spring Boot Developer",
    "MERN Stack Developer",
    "Java Backend Developer",
    "Microservices Developer",
  ],
  openGraph: {
    title: "Udit Patel Portfolio",
    description: "Full Stack Developer Portfolio",
    url: "https://yourdomain.com",
    siteName: "Udit Patel Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
