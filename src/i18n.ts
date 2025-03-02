import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importăm JSON-urile corect
import enTranslation from "./locales/en/translation.json";
import roTranslation from "./locales/ro/translation.json";

const resources = {
  en: { translation: enTranslation },
  ro: { translation: roTranslation },
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
