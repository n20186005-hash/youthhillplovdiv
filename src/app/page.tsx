export default function RootPage() {
  const defaultLocale = 'bg';
  const supportedLocales = ['bg', 'en', 'zh'];

  const detectLocale = (): string => {
    if (typeof window === 'undefined') return defaultLocale;
    try {
      const stored = localStorage.getItem('NEXT_LOCALE');
      if (stored && supportedLocales.includes(stored)) return stored;
    } catch {}
    try {
      const nav = (navigator.language || 'bg').toLowerCase();
      if (nav.startsWith('zh')) return 'zh';
      if (nav.startsWith('en')) return 'en';
      if (nav.startsWith('bg')) return 'bg';
    } catch {}
    return defaultLocale;
  };

  if (typeof window !== 'undefined') {
    const target = `/${detectLocale()}/`;
    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}/`} />
      <style>{`
        .root-redirect { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; font-family: system-ui, -apple-system, sans-serif; background: #f8fafc; color: #334155; }
        .root-redirect a { color: #3a7a8d; text-decoration: underline; }
      `}</style>
      <div className="root-redirect">
        <a href={`/${defaultLocale}/`}>Continue to site →</a>
      </div>
    </>
  );
}