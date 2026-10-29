import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [home, ...projectPages];
}
