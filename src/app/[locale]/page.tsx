import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import WeatherSection from '@/components/WeatherSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import InfoSection from '@/components/InfoSection';
import StoriesSection from '@/components/StoriesSection';
import RouteSection from '@/components/RouteSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import FAQSection from '@/components/FAQSection';
import SourcesSection from '@/components/SourcesSection';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config';

const BASE_URL = siteConfig.baseUrl;

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
    alternates: {
      canonical: `${BASE_URL}/${locale}/`,
      languages: {
        'bg': `${BASE_URL}/bg/`,
        'en': `${BASE_URL}/en/`,
        'zh': `${BASE_URL}/zh/`,
        'x-default': `${BASE_URL}/bg/`,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      siteName: 'Youth Hill',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'bg' ? 'bg_BG' : 'en_US',
      type: 'website',
      url: `${BASE_URL}/${locale}/`,
      images: [`${BASE_URL}/gallery/youth-hill-01.jpg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [`${BASE_URL}/gallery/youth-hill-01.jpg`],
    },
  };
}

async function JsonLd({ locale }: { locale: string }) {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const mapsLink = messages.hero?.mapsLink || siteConfig.mapsLink;
  const faqItems = (messages.faq?.items || []) as Array<{ question: string; answer: string }>;
  const cityName = locale === 'bg' ? 'Пловдив' : locale === 'en' ? 'Plovdiv' : '普罗夫迪夫';
  const selfUrl = `${BASE_URL}/${locale}/`;

  const attraction = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${selfUrl}#attraction`,
    name: messages.hero?.title || 'Youth Hill',
    alternateName: ['Младежки хълм', 'Джендем тепе', 'Youth Hill', 'Хълм на младостта'],
    description: messages.meta.description,
    url: selfUrl,
    image: [`${BASE_URL}/gallery/youth-hill-01.jpg`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Хълм на младостта (Младежки хълм)',
      addressLocality: 'Пловдив',
      postalCode: '4002',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.1368736,
      longitude: 24.7311411,
    },
    hasMap: mapsLink,
    telephone: messages.basicInfo?.telephoneValue || '+359893464019',
    isAccessibleForFree: true,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [mapsLink, 'http://www.visitplovdiv.com/'],
    touristType: ['Park', 'Hill', 'Adventure Center'],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: messages.header?.home || 'Home',
        item: selfUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: cityName,
        item: mapsLink,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: messages.hero?.title || 'Youth Hill',
        item: selfUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attraction) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <WeatherSection locale={locale} />
        <TicketsSection />
        <TransportSection />
        <FacilitiesSection />
        <InfoSection />
        <StoriesSection />
        <RouteSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <SourcesSection />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
