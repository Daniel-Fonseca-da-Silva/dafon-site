import { MetadataRoute } from 'next';
import { getSitemapPaths } from '@/lib/paths';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dafon.online';
  
  const paths = getSitemapPaths();
  
  return paths.map((path) => ({
    url: `${baseUrl}${path.path}`,
    lastModified: path.lastModified || new Date(),
    changeFrequency: path.changeFrequency,
    priority: path.priority,
  }));
}
