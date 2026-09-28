import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { siteConfig } from '@/config';

const BASE_URL = siteConfig.baseUrl;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    metadataBase: new URL(BASE_URL),
    title: messages.meta.title,
    description: messages.meta.description,
  };
}

async function SiteJsonLd({ locale }: { locale: string }) {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const selfUrl = `${BASE_URL}/${locale}/`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}#organization`,
        name: 'Youth Hill',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/gallery/youth-hill-01.jpg`,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}#website`,
        url: BASE_URL,
        name: 'Youth Hill – Plovdiv Guide',
        inLanguage: locale === 'zh' ? 'zh-CN' : locale === 'bg' ? 'bg-BG' : 'en',
        publisher: {
          '@id': `${BASE_URL}#organization`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${selfUrl}#webpage`,
        url: selfUrl,
        name: messages.meta.title,
        description: messages.meta.description,
        datePublished: '2026-09-01',
        dateModified: '2026-09-01',
        inLanguage: locale === 'zh' ? 'zh-CN' : locale === 'bg' ? 'bg-BG' : 'en',
        isPartOf: {
          '@id': `${BASE_URL}#website`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : locale === 'bg' ? 'bg-BG' : 'en'} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#3a7a8d" />
        <SiteJsonLd locale={locale} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // GA4 (G-HXM22WWPKP) – consent-gated: loads only after analytics opt-in
                window.__loadGA = function() {
                  if (window.__gaLoaded) return;
                  window.__gaLoaded = true;
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function() { window.dataLayer.push(arguments); };
                  window.gtag('js', new Date());
                  window.gtag('config', 'G-HXM22WWPKP');
                  var s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP';
                  document.head.appendChild(s);
                };
                try {
                  var prefs = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
                  if (prefs.analytics) window.__loadGA();
                } catch(e) {}
                window.addEventListener('consent-updated', function() {
                  try {
                    var p = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
                    if (p.analytics) window.__loadGA();
                  } catch(e) {}
                });
                // Service Worker (PWA offline support)
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').catch(function() {});
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
