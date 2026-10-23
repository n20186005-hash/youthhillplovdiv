import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config';
import { TOPICS, getTopic, topicAlternates } from '@/data/topics';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const lastModified = new Date('2026-10-23');

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

  // Topic (long-tail) pages
  for (const topic of TOPICS) {
    const localesWithContent = routing.locales.filter((l) => getTopic(topic.slug, l));
    if (localesWithContent.length === 0) continue;
    entries.push({
      url: `${baseUrl}/${localesWithContent[0]}/${topic.slug}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: topicAlternates(topic.slug, baseUrl),
      },
    });
  }

  return entries;
}
