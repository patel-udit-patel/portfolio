import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  isLcp?: boolean;
}

// Server-safe simple wrapper to avoid hydration mismatches.
// Animated behavior was moved out to avoid client/server DOM differences.
export default function FadeIn({ children }: Props) {
  // Always render a stable wrapper on both server and client.
  return <div>{children}</div>;
}