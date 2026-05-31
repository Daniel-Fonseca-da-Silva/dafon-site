export { seoConfig } from "./seo";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL environment variable is required");
}

export const siteName = "Dafon";
