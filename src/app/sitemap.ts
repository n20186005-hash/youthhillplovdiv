import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const lastModified = new Date('2026-09-01');

  const entries: MetadataRoute.Sitemap = [];

  const pages = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-settings',
  ];

  for (const locale of routing.locales) {
    for (const page of pages) {
      const languages: Record<string, string> = {};
      for (const l of routing.locales) {
        languages[l] = `${baseUrl}/${l}${page}/`;
      }
      languages['x-default'] = `${baseUrl}/bg${page}/`;

      entries.push({
        url: `${baseUrl}/${locale}${page}/`,
        lastModified,
        changeFrequency: 'weekly',
        priority: page === '' ? (locale === 'bg' ? 1 : 0.9) : 0.5,
        alternates: {
          languages,
        },
      });
    }
  }

  return entries;
}
