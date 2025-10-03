import { cityBlurbs } from "@/src/data/cityBlurbs";

export default async function sitemap() {
  const baseUrl = "https://apexlawncompany.com";

  const staticRoutes = [
    {
      url: `${baseUrl}/lawncare`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  const cityRoutes = Object.keys(cityBlurbs).map((city) => ({
    url: `${baseUrl}/lawncare/${city}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...cityRoutes];
}
