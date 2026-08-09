import type { MetadataRoute } from "next";

const baseUrl = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/skills",
    "/skills/android",
    "/roadmap",
    "/projects",
    "/architecture",
    "/assistant",
    "/achievements",
    "/experience",
    "/blog",
    "/community",
    "/workflow",
    "/downloads",
    "/contact",
    "/vision",
  ];

  return ["en", "my"].flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
  );
}
