// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abeseg.me",
      lastModified: new Date(),
    },
  ];
}
