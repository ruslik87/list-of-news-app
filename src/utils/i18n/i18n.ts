import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../../locales/en/en.json';
import ua from '../../locales/ua/ua.json';
import { Language } from '../../types/language';

const resources = {
  en: { translation: en },
  ua: { translation: ua },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: Language.EN,
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });
