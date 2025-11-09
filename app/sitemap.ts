import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL environment variable is required');
  }
  
  // Since this is a single-page application with anchor links,
  // we only include the main URL in the sitemap.
  // Anchor links (#) are not recommended in sitemaps as they point to the same page.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}

