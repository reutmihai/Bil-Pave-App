import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import roTranslation from "./locales/ro/translation.json";
import deTranslation from "./locales/de/translation.json";
import nlTranslation from "./locales/nl/translation.json";
import frTranslation from "./locales/fr/translation.json";

const resources = {
  en: { translation: enTranslation },
  ro: { translation: roTranslation },
  de: {translation: deTranslation },
  nl: {translation: nlTranslation},
  fr: {translation: frTranslation},
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
    resources,
  });

export default i18n;
