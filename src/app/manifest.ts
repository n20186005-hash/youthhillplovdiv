import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Младежки хълм Пловдив – Пътеводител',
    short_name: 'Младежки хълм',
    description:
      'Пътеводител за Младежки хълм в Пловдив – парк, детска железница, въжен парк и панорамни гледки. Безплатен достъп 24/7.',
    start_url: '/bg',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3a7a8d',
    lang: 'bg',
    categories: ['travel', 'tourism', 'lifestyle'],
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
