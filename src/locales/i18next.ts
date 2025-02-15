import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import landingPagePT from "../locales/pt/landingPage.json";
import landingPageEN from "../locales/en/landingPage.json";

import { AppLanguage, supportedLanguages } from "../utils/language";

const resources = {
  pt: {
    landingPage: landingPagePT,
  },
  en: {
    landingPage: landingPageEN,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    compatibilityJSON: "v4",
    fallbackLng: AppLanguage.PORTUGUESE,
    debug: true,
    resources,
    defaultNS: "landingPage",
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
