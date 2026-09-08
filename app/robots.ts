import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

/** Served at /robots.txt — opens the whole site to crawlers and points them at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
