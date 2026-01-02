import { MetadataRoute } from 'next';
import { getSitemapPaths } from '@/lib/paths';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL environment variable is required');
  }
  
  // Get all sitemap-ready paths dynamically
  const paths = getSitemapPaths();
  
  // Convert to Next.js sitemap format
  return paths.map((path) => ({
    url: path.url,
    lastModified: path.lastModified || new Date(),
    changeFrequency: path.changeFrequency,
    priority: path.priority,
  }));
}
