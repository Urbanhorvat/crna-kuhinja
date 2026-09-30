import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messages from './local/index';

export const LANGUAGE_STORAGE_KEY = 'crna-kuhna-lang';

export type AppLanguage = 'sl' | 'en' | 'de';

export const normalizeLanguage = (value?: string | null): AppLanguage => {
  const lang = value?.toLowerCase() ?? '';
  if (lang.startsWith('de')) return 'de';
  if (lang.startsWith('en')) return 'en';
  return 'sl';
};

const getInitialLanguage = (): AppLanguage => {
  if (typeof window === 'undefined') return 'sl';
  try {
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  } catch {
    return 'sl';
  }
};

const initialLanguage = getInitialLanguage();

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLanguage;
}

i18n.use(initReactI18next).init({
  lng: initialLanguage,
  fallbackLng: 'sl',
  supportedLngs: ['sl', 'en', 'de'],
  load: 'languageOnly',
  nonExplicitSupportedLngs: true,
  resources: messages,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;