import type { MetadataRoute } from "next";
import { destinations, properties } from "@/lib/properties";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlas-estates-phi.vercel.app";
  return [
    { url:baseUrl, lastModified:new Date(), changeFrequency:"monthly", priority:1 },
    { url:`${baseUrl}/case-study`, lastModified:new Date(), changeFrequency:"monthly", priority:.9 },
    ...destinations.map(({ slug }) => ({ url:`${baseUrl}/destinations/${slug}`, lastModified:new Date(), changeFrequency:"weekly" as const, priority:.8 })),
    ...properties.map(({ slug }) => ({ url:`${baseUrl}/properties/${slug}`, lastModified:new Date(), changeFrequency:"weekly" as const, priority:.9 })),
  ];
}
