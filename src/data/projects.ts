// src/data/projects.ts
export type Project = {
  title: string;
  year?: string | number;
  role?: string;
  description?: string;
  tags?: string[];
  href?: string;
  pdf?: string;            // ✅ add
  viewerHeight?: number;
  category: "work" | "school"      // link to case study or external
};

export const projects: Project[] = [
  {
    title: "Generative Merch System",
    year: 2024,
    role: "Creative + Dev",
    description: "Automated merch pipeline using AI prompts + data variants.",
    tags: ["AI", "Automation", "Design System"],
    href: "/work/generative-merch",
    category: "work", 
  },
  {
    title: "Realtime Viz Dash",
    year: 2023,
    role: "Frontend",
    description: "Streaming metrics with low-latency charts and custom shaders.",
    tags: ["WebGL", "DataViz"],
    href: "/work/realtime-viz",
    category: "work", 
  },
  {
    title: "Portfolio Engine",
    year: 2025,
    role: "Full-stack",
    description: "Astro/Tailwind pipeline with creative automation hooks.",
    tags: ["Astro", "Tailwind"],
    href: "/work/portfolio-engine",
    category: "work", 
  },
];
