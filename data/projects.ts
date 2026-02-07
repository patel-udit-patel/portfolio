export const projects = [
  {
    title: "Flight Booking Microservices",
    slug: "flight-booking-microservices",

    shortDescription:
      "Distributed flight booking system using Spring Boot microservices and cloud-native architecture.",

    description:
      "A scalable flight booking platform built using microservices architecture. The system handles flight search, booking, check-in, user authentication, payments, and notifications using independently deployable services.",

    problem:
      "Traditional monolithic booking systems face scalability issues, slow deployments, and difficulty handling independent service failures.",

    solution:
      "Designed a distributed microservices-based architecture using Spring Cloud components, API Gateway routing, service discovery, and centralized configuration.",

    architecture:
      "Microservices architecture using API Gateway, Eureka Service Discovery, Config Server, and independent service communication via REST.",

    features: [
      "JWT authentication and role-based authorization",
      "Stripe payment integration",
      "Flight search and booking workflow",
      "Seat selection and check-in module",
      "Notification service for booking updates",
      "Centralized configuration using Spring Cloud Config",
    ],

    tech: [
      "Spring Boot",
      "Spring Cloud",
      "Microservices",
      "Stripe",
      "JWT",
      "Eureka",
      "React",
      "MySQL",
      "Docker",
    ],

    learnings: [
      "Designing distributed systems",
      "Handling service-to-service communication",
      "Implementing secure authentication using JWT",
      "Managing microservice configuration centrally",
      "Payment gateway integration in microservices",
    ],

    futureImprovements: [
      "Add Kafka event-driven communication",
      "Implement distributed tracing using Zipkin",
      "Add load testing and monitoring dashboards",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "Legal Document Scanner (GenAI)",
    slug: "legal-document-scanner",

    shortDescription:
      "AI-powered legal document analyzer using LLM and vector embeddings.",

    description:
      "An intelligent document analysis system that processes legal documents and extracts meaningful insights using Large Language Models and semantic vector search.",

    problem:
      "Manual legal document review is time-consuming and prone to human error, especially when analyzing large contracts.",

    solution:
      "Built an AI pipeline using embeddings and LLM models to semantically analyze and summarize legal documents.",

    architecture:
      "LLM-based processing pipeline with document embedding storage and semantic retrieval using vector similarity search.",

    features: [
      "Automated legal document summarization",
      "Semantic search using vector embeddings",
      "Context-aware question answering",
      "Document parsing and preprocessing",
      "AI-generated insights from contracts",
    ],

    tech: [
      "Python",
      "GenAI",
      "HuggingFace",
      "Google FLAN",
      "Vector Embeddings",
      "LangChain",
      "FAISS / Vector DB",
    ],

    learnings: [
      "Working with LLM pipelines",
      "Embedding generation and semantic retrieval",
      "Prompt engineering strategies",
      "Handling large document datasets",
    ],

    futureImprovements: [
      "Multi-document comparison support",
      "Fine-tuning LLM for legal domain",
      "UI dashboard for document analytics",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "Ride Sharing App",
    slug: "ride-sharing-app",

    shortDescription:
      "Full stack ride sharing platform with map tracking and payment integration.",

    description:
      "A real-time ride sharing application allowing users to book rides, track drivers using maps, and securely process payments.",

    problem:
      "Users need a seamless platform for booking rides with real-time tracking and secure digital payments.",

    solution:
      "Developed a full-stack web platform using Next.js frontend and MongoDB backend with map integration and Stripe payment gateway.",

    architecture:
      "Full stack architecture using Next.js for frontend rendering, REST APIs for backend services, and third-party APIs for maps and payments.",

    features: [
      "Real-time ride booking",
      "Driver location tracking using Mapbox",
      "Secure Stripe payment integration",
      "User authentication and ride history",
      "Responsive UI and booking workflow",
    ],

    tech: [
      "Next.js",
      "React",
      "MongoDB",
      "Mapbox API",
      "Stripe",
      "Node.js",
      "Tailwind CSS",
    ],

    learnings: [
      "Map API integration",
      "Handling real-time UI updates",
      "Secure payment processing",
      "Full stack application design",
    ],

    futureImprovements: [
      "Add real-time driver matching algorithm",
      "Introduce WebSocket live driver tracking",
      "Add ride fare prediction using ML",
    ],

    github: "#",
    demo: "#",
  },
];
