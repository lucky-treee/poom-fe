import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ko_KR from 'utils/i18n/locales/ko_KR/translation.json';

export enum Locale {
  KO = 'ko-KR',
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      [Locale.KO]: {
        translation: ko_KR,
      },
    },
    supportedLngs: [Locale.KO],
    fallbackLng: Locale.KO,
    interpolation: {
      escapeValue: false,
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong'],
    },
    detection: {
      order: ['cookie'],
      lookupCookie: 'i18next',
    },
  });

export default i18next;
