import Header from './Header';
import Footer from './Footer';
import type { TopicContent } from '@/data/topics';
import { getTopic, topicLocales } from '@/data/topics';

const GALLERY_IMAGES = Array.from({ length: 19 }, (_, i) => ({
  src: `/gallery/youth-hill-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Youth Hill Plovdiv photo ${i + 1}`,
}));

export default function TopicPage({
  content,
  locale,
  slug,
}: {
  content: TopicContent;
  locale: string;
  slug: string;
}) {
  const prefix = `/${locale}`;

  return (
    <>
      <Header />
      <main className="pt-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <nav aria-label="Breadcrumb" className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <a href={prefix} className="hover:underline" style={{ color: 'var(--accent)' }}>
              {locale === 'bg' ? 'Начало' : locale === 'en' ? 'Home' : '首页'}
            </a>
            <span className="mx-2">/</span>
            <span>{content.h1}</span>
          </nav>

          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {content.h1}
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            {content.lead}
          </p>

          {content.gallery && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {GALLERY_IMAGES.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={`${content.h1} – ${img.alt}`}
                  className="w-full h-40 object-cover rounded-lg"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {content.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {section.title}
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {section.body}
              </p>
            </section>
          ))}

          {content.sources && content.sources.length > 0 && (
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {locale === 'bg' ? 'Източници' : 'Sources'}
              </h2>
              <ul className="list-disc pl-5 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                {content.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--accent)' }}>
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {content.faq.length > 0 && (
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {locale === 'bg' ? 'Често задавани въпроси' : 'Frequently asked questions'}
              </h2>
              <div className="space-y-2">
                {content.faq.map((item, i) => (
                  <details key={i} className="rounded-lg border" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
                    <summary className="cursor-pointer px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>
                      {item.q}
                    </summary>
                    <p className="px-4 pb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <p className="text-xs mb-8" style={{ color: 'var(--text-muted)' }}>
            {locale === 'bg' ? 'Проверено на' : 'Verified on'}: {content.updated}
          </p>

          {content.related.length > 0 && (
            <section className="mb-8">
              <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {locale === 'bg' ? 'Свързани теми' : 'Related topics'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {content.related
                  .filter((rel) => topicLocales(rel).includes(locale))
                  .map((rel) => {
                    const label = getTopic(rel, locale)?.h1 || rel.replace(/-/g, ' ');
                    return (
                      <a
                        key={rel}
                        href={`${prefix}/${rel}/`}
                        className="px-3 py-1.5 rounded-full text-sm hover:underline"
                        style={{ background: 'var(--bg-tertiary)', color: 'var(--accent)' }}
                      >
                        {label}
                      </a>
                    );
                  })}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
