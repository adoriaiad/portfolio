import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import it from './config/locales/it/it.json';
import en from './config/locales/en/en.json';
import fr from './config/locales/fr/fr.json';

i18n
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    debug: true,
    load: 'languageOnly',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: en,
      },
      it: {
        translation: it,
      },
      fr: {
        translation: fr,
      }
    },
  });

export default i18n;
