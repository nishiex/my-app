import type { MetadataRoute } from "next";

// Canonical base URL. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. a preview deployment) without touching code.
const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arcadelx.com"
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/refund-cancellation-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
