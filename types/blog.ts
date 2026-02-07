export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content?: string; // Optional content for the detailed view
  tags?: string[];
}