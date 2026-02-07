export interface Project {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  // Include these to support the rich data in your data file
  problem?: string;
  solution?: string;
  architecture?: string;
  features?: string[];
  learnings?: string[];
  github?: string;
  demo?: string;
}