import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dafon - Innovative Solutions for Your Business',
    short_name: 'Dafon',
    description: 'Dafon delivers cutting-edge solutions and exceptional service. Discover how we can transform your business with our innovative approach and expert team.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#a855f7',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}

