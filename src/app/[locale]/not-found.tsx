import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

// Note: `not-found.tsx` does not receive route `params` in the App Router,
// so the locale must come from the surrounding layout's intl context instead.
export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-md w-full text-center py-24">
        <p className="font-display text-7xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
          404
        </p>
        <h1 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h1>
        <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('description')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-colors"
          style={{ background: 'var(--accent)' }}
        >
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}
