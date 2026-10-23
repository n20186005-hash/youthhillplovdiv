import { TOPICS, TOPIC_GROUPS, getTopic, topicSlugsForLocale } from '@/data/topics';

export default function TopicLinks({ locale }: { locale: string }) {
  const slugs = topicSlugsForLocale(locale);
  if (slugs.length === 0) return null;

  const labelGroup = (key: string) =>
    TOPIC_GROUPS.find((g) => g.key === key)?.title[locale] ||
    (locale === 'bg' ? 'Теми' : 'Topics');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {locale === 'bg' ? 'Разгледайте повече' : 'Explore more guides'}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          {locale === 'bg'
            ? 'Подробни страници за фотография, навигация, детска железница, въжен парк, хранене и маршрути.'
            : 'Detailed pages on photos, directions, the children’s railway, rope park, dining and routes.'}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-10">
          {TOPIC_GROUPS.map((group) => {
            const items = TOPICS.filter(
              (t) => t.group === group.key && slugs.includes(t.slug)
            );
            if (items.length === 0) return null;
            return (
              <div key={group.key}>
                <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {labelGroup(group.key)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((t) => {
                    const content = getTopic(t.slug, locale);
                    if (!content) return null;
                    return (
                      <a
                        key={t.slug}
                        href={`/${locale}/${t.slug}/`}
                        className="block rounded-xl p-5 transition-all hover:-translate-y-0.5"
                        style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
                      >
                        <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                          {content.h1}
                        </h4>
                        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                          {content.card}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
