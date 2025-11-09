import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL environment variable is required');
  }
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow admin or private areas if any
      // disallow: ['/admin/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

