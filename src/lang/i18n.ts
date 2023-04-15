import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// language json files
import en from './local/en.json';
import tw from './local/tw.json';

const resources = {
  'en-US': {
    translation: en,
  },
  'zh-TW': {
    translation: tw,
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: {
      'en-US': ['en', 'en-US'],
      'zh-TW': ['zh-TW', 'zh-CN'],
    },

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
