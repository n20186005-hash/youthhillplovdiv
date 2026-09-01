'use client';

import { useTranslations, useMessages } from 'next-intl';

const kindStyles: Record<string, { dot: string; background: string; color: string }> = {
  history: { dot: '#2d5a3d', background: 'var(--tag-bg)', color: 'var(--tag-text)' },
  legend: { dot: '#d4843d', background: 'var(--tag-bg)', color: 'var(--tag-text)' },
  fact: { dot: '#3a7a8d', background: 'var(--tag-bg)', color: 'var(--tag-text)' },
};

export default function StoriesSection() {
  const t = useTranslations('stories');
  const messages = useMessages() as any;
  const items = (messages?.stories?.items || []) as Array<{
    title: string;
    text: string;
    kind: string;
    tag: string;
  }>;

  return (
    <section id="stories" className="section-padding" style={{ scrollMarginTop: '5rem', background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-12" style={{ background: 'var(--accent)' }} />

        <div className="space-y-8">
          {items.map((story, index) => {
            const style = kindStyles[story.kind] || kindStyles.fact;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl border"
                style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg"
                    style={{ background: 'var(--accent)', color: 'white' }}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold flex-1" style={{ color: 'var(--text-primary)' }}>
                    {story.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                    style={{ background: style.background, color: style.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: style.dot }} />
                    {story.tag}
                  </span>
                </div>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {story.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
