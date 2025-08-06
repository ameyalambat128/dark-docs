import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: "https://darkdocs.ameyalambat.com/sitemap.xml",
    host: "https://darkdocs.ameyalambat.com",
  };
}
