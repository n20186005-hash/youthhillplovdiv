/**
 * Topic (long-tail content) registry for Youth Hill Plovdiv.
 *
 * 40 independent guide pages, grouped by theme. Content lives in locale files
 * (topics.bg.ts / topics.en.ts) keyed by slug. Only slugs that have content in
 * a given locale are published; other combinations return 404 (dynamicParams=false).
 */

export type TopicSection = {
  id: string;
  title: string;
  body: string;
};

export type TopicFaq = {
  q: string;
  a: string;
};

export type TopicSource = {
  name: string;
  url: string;
};

export type TopicContent = {
  /** Meta title (used in <title> and og:title) */
  title: string;
  /** Meta description */
  description: string;
  /** Visible H1 */
  h1: string;
  /** Short label for the homepage TopicLinks grid */
  card: string;
  /** Intro paragraph shown under the H1 */
  lead: string;
  /** Main content blocks */
  sections: TopicSection[];
  /** FAQ items (rendered as <details> + FAQPage JSON-LD) */
  faq: TopicFaq[];
  /** Related topic slugs for internal cross-linking */
  related: string[];
  /** Last-verified date (ISO) shown on the page */
  updated: string;
  /** Optional external references */
  sources?: TopicSource[];
  /** When true the page embeds a photo gallery */
  gallery?: boolean;
};

export type TopicGroup = 'park' | 'food' | 'nearby' | 'history';

export type TopicMeta = {
  slug: string;
  group: TopicGroup;
  priority: 1 | 2 | 3;
};

export const TOPICS: TopicMeta[] = [
  // P1
  { slug: 'photos', group: 'park', priority: 1 },
  { slug: 'directions', group: 'park', priority: 1 },
  { slug: 'parking', group: 'park', priority: 1 },
  { slug: 'summit-walk', group: 'park', priority: 1 },
  { slug: 'childrens-railway', group: 'park', priority: 1 },
  { slug: 'rope-park', group: 'park', priority: 1 },
  { slug: 'with-kids', group: 'park', priority: 1 },
  { slug: 'restaurants', group: 'food', priority: 1 },
  { slug: 'central-park', group: 'food', priority: 1 },
  { slug: 'family-half-day', group: 'nearby', priority: 1 },
  // P2
  { slug: 'accessibility', group: 'park', priority: 2 },
  { slug: 'best-time', group: 'park', priority: 2 },
  { slug: 'playgrounds', group: 'park', priority: 2 },
  { slug: 'picnic', group: 'park', priority: 2 },
  { slug: 'coffee-stops', group: 'food', priority: 2 },
  { slug: 'breakfast', group: 'food', priority: 2 },
  { slug: 'bulgarian-food', group: 'food', priority: 2 },
  { slug: 'food-and-water', group: 'food', priority: 2 },
  { slug: 'bunardzhik', group: 'nearby', priority: 2 },
  { slug: 'tsar-simeon-garden', group: 'nearby', priority: 2 },
  { slug: 'two-hour-itinerary', group: 'nearby', priority: 2 },
  { slug: 'plovdiv-hills', group: 'nearby', priority: 2 },
  { slug: 'history', group: 'history', priority: 2 },
  { slug: 'dzhendem-tepe', group: 'history', priority: 2 },
  { slug: 'height-and-geology', group: 'history', priority: 2 },
  { slug: 'protected-nature', group: 'history', priority: 2 },
  // P3
  { slug: 'dog-walking', group: 'park', priority: 3 },
  { slug: 'vegetarian-food', group: 'food', priority: 3 },
  { slug: 'kapana-dinner', group: 'food', priority: 3 },
  { slug: 'danov-hill', group: 'nearby', priority: 3 },
  { slug: 'nebet-tepe', group: 'nearby', priority: 3 },
  { slug: 'singing-fountains', group: 'nearby', priority: 3 },
  { slug: 'kapana-walk', group: 'nearby', priority: 3 },
  { slug: 'old-town', group: 'nearby', priority: 3 },
  { slug: 'rowing-canal', group: 'nearby', priority: 3 },
  { slug: 'natural-history-museum', group: 'nearby', priority: 3 },
  { slug: 'one-day-itinerary', group: 'nearby', priority: 3 },
  { slug: 'two-hills-walk', group: 'nearby', priority: 3 },
  { slug: 'rainy-day-alternatives', group: 'nearby', priority: 3 },
  { slug: 'railway-history', group: 'history', priority: 3 },
];

export const TOPIC_GROUPS: { key: TopicGroup; title: Record<string, string> }[] = [
  { key: 'park', title: { bg: 'В хълма и около него', en: 'In and around the hill' } },
  { key: 'food', title: { bg: 'Храна и кафе', en: 'Food and coffee' } },
  { key: 'nearby', title: { bg: 'Маршрути и съседни забележителности', en: 'Routes and nearby sights' } },
  { key: 'history', title: { bg: 'История и природа', en: 'History and nature' } },
];

import { bgContent } from './topics.bg';
import { enContent } from './topics.en';

const CONTENT: Record<string, Record<string, TopicContent>> = {
  bg: bgContent,
  en: enContent,
};

export function getTopic(slug: string, locale: string): TopicContent | undefined {
  return CONTENT[locale]?.[slug];
}

export function topicSlugs(): string[] {
  return TOPICS.map((t) => t.slug);
}

/** Locales that have published content for a given slug. */
export function topicLocales(slug: string): string[] {
  return Object.keys(CONTENT).filter((loc) => CONTENT[loc][slug]);
}

/** Slugs that have published content for a given locale. */
export function topicSlugsForLocale(locale: string): string[] {
  return TOPICS.filter((t) => CONTENT[locale]?.[t.slug]).map((t) => t.slug);
}

/** hreflang alternates for a topic page (only published locales + x-default). */
export function topicAlternates(slug: string, baseUrl: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const loc of topicLocales(slug)) {
    out[loc] = `${baseUrl}/${loc}/${slug}/`;
  }
  if (out['bg']) {
    out['x-default'] = out['bg'];
  } else if (Object.keys(out).length) {
    out['x-default'] = Object.values(out)[0];
  }
  return out;
}
