'use client';

import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  wc: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="5" r="2.5"/>
      <circle cx="17" cy="5" r="2.5"/>
      <path d="M4 10h6v11H4z"/>
      <path d="M14 10h6v11h-6z"/>
      <path d="M2.5 21h9"/>
      <path d="M12.5 21h9"/>
    </svg>
  ),
  parking: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
    </svg>
  ),
  food: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 2v20"/>
      <path d="M17 10a4 4 0 0 0 0-8"/>
      <path d="M7 2v6a3 3 0 0 0 6 0V2"/>
      <path d="M10 8v14"/>
    </svg>
  ),
  accommodation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 21V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <path d="M2 17h20"/>
      <path d="M8 11h12a2 2 0 0 1 2 2v8"/>
      <path d="M6 11v10"/>
      <circle cx="6" cy="6" r="1.5"/>
    </svg>
  ),
  shops: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <path d="M3 6h18"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  fuel: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3h9v18H4z"/>
      <path d="M13 9h4a2 2 0 0 1 2 2v6a2 2 0 0 0 4 0v-7l-3-3"/>
      <path d="M8.5 7h2"/>
      <path d="M8.5 12h2"/>
      <path d="M22 4v2"/>
    </svg>
  ),
  medical: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M12 8v8"/>
      <path d="M8 12h8"/>
    </svg>
  ),
  atm: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M2 10h20"/>
      <path d="M6 15h4"/>
    </svg>
  ),
};

export default function FacilitiesSection() {
  const t = useTranslations('facilities');
  const messages = useMessages() as any;
  const items = (messages?.facilities?.items || []) as Array<{
    id: string;
    title: string;
    description: string;
    hint?: string;
  }>;

  return (
    <section id="facilities" className="section-padding" style={{ scrollMarginTop: '5rem', background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl p-5 border"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent)', color: 'white' }}
                >
                  {icons[item.id]}
                </div>
                <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                {item.hint && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                  >
                    {item.hint}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('note')}
        </p>
      </div>
    </section>
  );
}
