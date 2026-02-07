import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact | Udit Patel",
  description:
    "Contact Udit Patel for software engineering opportunities, backend development, microservices architecture, and full stack projects.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <ContactSection />
    </main>
  );
}
