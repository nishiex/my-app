import type { MetadataRoute } from "next";

// Keep in sync with app/sitemap.ts.
const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ww.arcadelx.com"
).replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Next.js internals that shouldn't be crawled.
      disallow: ["/_next/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
