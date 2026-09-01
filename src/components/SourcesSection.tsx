'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function SourcesSection() {
  const t = useTranslations('sources');
  const messages = useMessages() as any;
  const items = (messages?.sources?.items || []) as Array<{ name: string; url: string; description: string }>;

  return (
    <section id="sources" className="section-padding" style={{ scrollMarginTop: '5rem', background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <ul className="space-y-4">
          {items.map((source) => (
            <li
              key={source.url}
              className="p-5 rounded-xl border"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline decoration-2 underline-offset-2"
                style={{ color: 'var(--accent)' }}
              >
                {source.name}
              </a>
              <p className="text-sm leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
                {source.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('note')}
        </p>
      </div>
    </section>
  );
}
