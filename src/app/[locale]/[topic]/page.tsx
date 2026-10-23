import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import TopicPage from '@/components/TopicPage';
import { siteConfig } from '@/config';
import { routing } from '@/i18n/routing';
import {
  TOPICS,
  getTopic,
  topicAlternates,
  topicLocales,
} from '@/data/topics';

const BASE_URL = siteConfig.baseUrl;

export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: string; topic: string }[] = [];
  for (const locale of routing.locales) {
    for (const t of TOPICS) {
      if (getTopic(t.slug, locale)) {
        params.push({ locale, topic: t.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  const content = getTopic(topic, locale);
  if (!content) return {};

  const selfUrl = `${BASE_URL}/${locale}/${topic}/`;

  return {
    metadataBase: new URL(BASE_URL),
    title: content.title,
    description: content.description,
    alternates: {
      canonical: selfUrl,
      languages: topicAlternates(topic, BASE_URL),
    },
    openGraph: {
      title: content.title,
      description: content.description,
      siteName: 'Youth Hill',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'bg' ? 'bg_BG' : 'en_US',
      type: 'article',
      url: selfUrl,
      images: [`${BASE_URL}/gallery/youth-hill-01.jpg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [`${BASE_URL}/gallery/youth-hill-01.jpg`],
    },
  };
}

function TopicJsonLd({ locale, topic }: { locale: string; topic: string }) {
  const content = getTopic(topic, locale)!;
  const selfUrl = `${BASE_URL}/${locale}/${topic}/`;
  const homeUrl = `${BASE_URL}/${locale}/`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${selfUrl}#webpage`,
        url: selfUrl,
        name: content.title,
        description: content.description,
        dateModified: content.updated,
        inLanguage: locale === 'zh' ? 'zh-CN' : locale === 'bg' ? 'bg-BG' : 'en',
        isPartOf: { '@id': `${BASE_URL}#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'bg' ? 'Начало' : locale === 'en' ? 'Home' : '首页',
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: content.h1,
            item: selfUrl,
          },
        ],
      },
      ...(content.faq.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: content.faq.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const content = getTopic(topic, locale);
  if (!content) {
    notFound();
  }

  setRequestLocale(locale);

  const topicContent = content!;

  return (
    <>
      <TopicJsonLd locale={locale} topic={topic} />
      <TopicPage content={topicContent} locale={locale} slug={topic} />
    </>
  );
}
