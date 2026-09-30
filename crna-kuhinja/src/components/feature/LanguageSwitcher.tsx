import { useTranslation } from 'react-i18next';
import { LANGUAGE_STORAGE_KEY, normalizeLanguage, type AppLanguage } from '@/i18n';

interface LanguageSwitcherProps {
  tone?: 'dark' | 'light';
}

const LANGUAGES: { code: AppLanguage; label: string; aria: string }[] = [
  { code: 'sl', label: 'SL', aria: 'Slovenščina' },
  { code: 'en', label: 'EN', aria: 'English' },
  { code: 'de', label: 'DE', aria: 'Deutsch' },
];

export default function LanguageSwitcher({ tone = 'dark' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const current = normalizeLanguage(i18n.resolvedLanguage || i18n.language);

  const change = (lng: AppLanguage) => {
    if (lng === current) return;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
    } catch {
      // ignore storage errors
    }
    document.documentElement.lang = lng;
    i18n.changeLanguage(lng);
  };

  const wrapperClass = tone === 'dark' ? 'border-foreground-800/25' : 'border-foreground-900/15';

  const activeClass =
    tone === 'dark'
      ? 'bg-foreground-950/15 text-foreground-950'
      : 'bg-foreground-950/10 text-foreground-900';

  const inactiveClass =
    tone === 'dark'
      ? 'text-foreground-600/70 hover:text-foreground-950'
      : 'text-foreground-500 hover:text-foreground-900';

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border p-0.5 ${wrapperClass}`}
      role="group"
      aria-label="Language"
    >
      {LANGUAGES.map(({ code, label, aria }) => (
        <button
          key={code}
          type="button"
          onClick={() => change(code)}
          aria-label={aria}
          aria-pressed={current === code}
          className={`cursor-pointer rounded-full px-2.5 py-1 font-label text-[11px] font-semibold uppercase tracking-wider transition-colors duration-200 ${
            current === code ? activeClass : inactiveClass
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}