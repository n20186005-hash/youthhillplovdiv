'use client';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

const LATITUDE = 42.1368736;
const LONGITUDE = 24.7311411;
const FORECAST_DAYS = 7;
const STALE_MS = 30 * 60 * 1000;

interface WeatherData {
  current: {
    time: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily: {
    time: number[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: (number | null)[];
  };
}

interface CachedWeather {
  fetchedAt: number;
  data: WeatherData;
}

const CACHE_KEY = 'youth-hill-weather-cache';

function readCache(): WeatherData | null {
  try {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedWeather;
    if (!parsed.data || !parsed.fetchedAt) return null;
    if (Date.now() - parsed.fetchedAt > STALE_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data: WeatherData) {
  try {
    if (typeof window === 'undefined') return;
    const payload: CachedWeather = { fetchedAt: Date.now(), data };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {}
}

async function fetchWeather(): Promise<WeatherData | null> {
  const params = new URLSearchParams({
    latitude: String(LATITUDE),
    longitude: String(LONGITUDE),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
    timezone: 'Europe/Sofia',
    timeformat: 'unixtime',
    forecast_days: String(FORECAST_DAYS),
  });

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const json = (await res.json()) as WeatherData;
    writeCache(json);
    return json;
  } catch {
    return null;
  }
}

type WeatherGroup =
  | 'clear'
  | 'mostly'
  | 'partly'
  | 'cloudy'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'snow'
  | 'storm';

function groupFor(code: number): WeatherGroup {
  if (code === 0) return 'clear';
  if (code === 1) return 'mostly';
  if (code === 2) return 'partly';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
  if (code === 71 || code === 73 || code === 75 || code === 77 || code === 85 || code === 86) return 'snow';
  if (code >= 95 && code <= 99) return 'storm';
  return 'cloudy';
}

function WeatherIcon({ code, size = 24 }: { code: number; size?: number }) {
  const group = groupFor(code);
  const svgProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (group) {
    case 'clear':
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19" />
        </svg>
      );
    case 'mostly':
      return (
        <svg {...svgProps}>
          <circle cx="15.5" cy="7.5" r="3.5" />
          <path d="M15.5 1.5v1.4M15.5 12.1v1.4M9.1 7.5h1.4M20.5 7.5h1.4M10.9 3l1 1M19.1 11l1 1M20.1 3l-1 1M12 11l-1 1" />
          <path d="M17.8 18.5H9.2a4.6 4.6 0 1 1 .7-9.2A5.8 5.8 0 0 1 20.6 13 3.7 3.7 0 0 1 17.8 18.5z" />
        </svg>
      );
    case 'partly':
      return (
        <svg {...svgProps}>
          <circle cx="8.5" cy="7.5" r="3.2" />
          <path d="M8.5 2.2v1M8.5 12.8v1M3.2 7.5h1M12.8 7.5h1M4.7 3.7l.8.8M11.5 10.5l.8.8M12.3 3.7l-.8.8M5.5 10.5l-.8.8" />
          <path d="M17.5 19H9.5a4.7 4.7 0 1 1 .6-9.3A6 6 0 0 1 20.8 13.2 4 4 0 0 1 17.5 19z" />
        </svg>
      );
    case 'fog':
      return (
        <svg {...svgProps}>
          <path d="M17.5 13H9a4.5 4.5 0 1 1 .6-8.96A5.8 5.8 0 0 1 20.7 7.4 3.9 3.9 0 0 1 17.5 13z" />
          <path d="M5 16.5h14M6 19.5h12" />
        </svg>
      );
    case 'drizzle':
      return (
        <svg {...svgProps}>
          <path d="M17.5 12H9a4.5 4.5 0 1 1 .6-8.96A5.8 5.8 0 0 1 20.7 6.4 3.9 3.9 0 0 1 17.5 12z" />
          <path d="M8.5 16v2.5M12 16v2.5M15.5 16v2.5" />
        </svg>
      );
    case 'rain':
      return (
        <svg {...svgProps}>
          <path d="M17.5 12H9a4.5 4.5 0 1 1 .6-8.96A5.8 5.8 0 0 1 20.7 6.4 3.9 3.9 0 0 1 17.5 12z" />
          <path d="M8.2 16.5l-1 3.2M12.2 16.5l-1 3.2M16.2 16.5l-1 3.2" />
        </svg>
      );
    case 'snow':
      return (
        <svg {...svgProps}>
          <path d="M17.5 12H9a4.5 4.5 0 1 1 .6-8.96A5.8 5.8 0 0 1 20.7 6.4 3.9 3.9 0 0 1 17.5 12z" />
          <path d="M10 16.5l.7.7M11.4 15.1v1M12.8 16.5l-.7.7" />
          <path d="M14.5 16.5l.7.7M15.9 15.1v1M17.3 16.5l-.7.7" />
        </svg>
      );
    case 'storm':
      return (
        <svg {...svgProps}>
          <path d="M17.5 12H9a4.5 4.5 0 1 1 .6-8.96A5.8 5.8 0 0 1 20.7 6.4 3.9 3.9 0 0 1 17.5 12z" />
          <path d="M10.5 17.5L8.5 21h4.5l-1.5 3" />
        </svg>
      );
    default:
      return (
        <svg {...svgProps}>
          <path d="M17.5 12H9a4.5 4.5 0 1 1 .6-8.96A5.8 5.8 0 0 1 20.7 6.4 3.9 3.9 0 0 1 17.5 12z" />
        </svg>
      );
  }
}

function Stat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div
      className="rounded-xl p-3 flex items-center gap-3 border"
      style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
    >
      <span style={{ color: 'var(--accent)' }}>{icon}</span>
      <div className="min-w-0">
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</p>
        <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{value}</p>
      </div>
    </div>
  );
}

const smallIcons = {
  thermometer: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M14 14.76V4a2 2 0 0 0-4 0v10.76a4 4 0 1 0 4 0z" />
    </svg>
  ),
  drop: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5s6 6.2 6 10.5a6 6 0 0 1-12 0c0-4.3 6-10.5 6-10.5z" />
    </svg>
  ),
  wind: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2M17.5 8a2.5 2.5 0 1 1 2 4H2" />
    </svg>
  ),
};

export default function WeatherSection({ locale }: { locale: string }) {
  const t = useTranslations('weather');
  const [data, setData] = useState<WeatherData | null>(() => readCache());
  const [loaded, setLoaded] = useState<boolean>(!!readCache());

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const result = await fetchWeather();
      if (!cancelled) {
        if (result) setData(result);
        setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const intlLocale = locale === 'bg' ? 'bg-BG' : locale === 'zh' ? 'zh-CN' : 'en-GB';
  const timeFmt = new Intl.DateTimeFormat(intlLocale, { hour: '2-digit', minute: '2-digit' });
  const weekdayFmt = new Intl.DateTimeFormat(intlLocale, { weekday: 'short' });
  const dayMonthFmt = new Intl.DateTimeFormat(intlLocale, { day: 'numeric', month: 'short' });

  const labelFor = (code: number) => (t.has(`codes.${code}`) ? t(`codes.${code}`) : t('codes.0'));

  return (
    <section
      id="weather"
      className="section-padding"
      style={{ scrollMarginTop: '5rem', background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {!loaded && !data ? (
          <div
            className="rounded-2xl border p-8 text-center"
            style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center animate-pulse"
              style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12a9 9 0 1 1-6.2-8.6" />
                <path d="M21 3v6h-6" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {t('fallbackTitle')}
            </h3>
            <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {t('fallbackText')}
            </p>
          </div>
        ) : !data ? (
          <div
            className="rounded-2xl border p-8 text-center"
            style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
              {t('fallbackTitle')}
            </h3>
            <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {t('fallbackText')}
            </p>
          </div>
        ) : (
          <>
            {/* Current conditions */}
            <div
              className="rounded-2xl border p-6 sm:p-8 mb-6"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
                <div className="flex items-center gap-5">
                  <div
                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--accent)', color: 'white' }}
                  >
                    <WeatherIcon code={data.current.weather_code} size={36} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                      {t('nowLabel')}
                    </p>
                    <p className="font-display text-4xl sm:text-5xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {Math.round(data.current.temperature_2m)}°C
                    </p>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                      {labelFor(data.current.weather_code)}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                      {t('updated')}: {timeFmt.format(new Date(data.current.time * 1000))} ·{' '}
                      {dayMonthFmt.format(new Date(data.current.time * 1000))}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 w-full lg:w-96">
                  <Stat
                    icon={smallIcons.thermometer}
                    label={t('feelsLike')}
                    value={`${Math.round(data.current.apparent_temperature)}°C`}
                  />
                  <Stat icon={smallIcons.drop} label={t('humidity')} value={`${data.current.relative_humidity_2m}%`} />
                  <Stat
                    icon={smallIcons.wind}
                    label={t('wind')}
                    value={`${Math.round(data.current.wind_speed_10m)} ${t('windUnit')}`}
                  />
                  <Stat
                    icon={smallIcons.drop}
                    label={t('precipitation')}
                    value={`${data.current.precipitation > 0 ? data.current.precipitation.toFixed(1) : '0'} mm`}
                  />
                </div>
              </div>
            </div>

            {/* 7-day forecast */}
            <div
              className="rounded-2xl border p-6 sm:p-8"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <h3 className="font-display text-xl font-semibold mb-5" style={{ color: 'var(--text-primary)' }}>
                {t('forecastLabel')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {data.daily.time.map((sec, i) => {
                  const date = new Date(sec * 1000);
                  const max = Math.round(data.daily.temperature_2m_max[i]);
                  const min = Math.round(data.daily.temperature_2m_min[i]);
                  const precip = data.daily.precipitation_probability_max[i];
                  return (
                    <div
                      key={sec}
                      className="rounded-xl p-4 text-center border"
                      style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}
                    >
                      <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                        {weekdayFmt.format(date)}
                      </p>
                      <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                        {dayMonthFmt.format(date)}
                      </p>
                      <div className="mb-2 flex justify-center" style={{ color: 'var(--accent)' }}>
                        <WeatherIcon code={data.daily.weather_code[i]} size={28} />
                      </div>
                      <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                        {precip !== null && precip >= 5 ? `${precip}%` : '—'}
                      </p>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {t('max')} {max}°
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {t('min')} {min}°
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                <span>{t('refreshNote')}</span>
                <a
                  href="https://open-meteo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-2"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('source')}: Open-Meteo
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
