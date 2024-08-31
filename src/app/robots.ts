import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/login"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
