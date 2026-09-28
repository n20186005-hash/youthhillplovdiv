import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';
import { siteConfig } from '@/config';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = siteConfig.baseUrl;
  const zhUrl = `${baseUrl}/zh/cookie-settings/`;
  const enUrl = `${baseUrl}/en/cookie-settings/`;
  const bgUrl = `${baseUrl}/bg/cookie-settings/`;
  const selfUrl = `${baseUrl}/${locale}/cookie-settings/`;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'bg': bgUrl,
        'x-default': bgUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
