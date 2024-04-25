import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import zhTW from 'assets/translation/zh-TW.json';
import enUS from 'assets/translation/en-US.json';

const initI18n = () =>
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en-US',
      resources: {
        'en-US': {
          translation: enUS,
        },
        'zh-TW': {
          translation: zhTW,
        },
      },
    });

export default initI18n;
