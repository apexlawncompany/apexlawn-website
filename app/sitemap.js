import { cityBlurbs } from "@/src/data/cityBlurbs";

export default async function sitemap() {
  const baseUrl = "https://apexlawncompany.com";

  //  1. Core Static Pages

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/lawncare`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/james`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // 2. City-based Lawn Care Pages

  const cityRoutes = Object.keys(cityBlurbs).map((city) => ({
    url: `${baseUrl}/lawncare/${city}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));


  return [...staticRoutes, ...cityRoutes];
}
