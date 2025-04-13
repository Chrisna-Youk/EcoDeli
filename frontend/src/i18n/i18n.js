import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJsonFile from "./locales/en.json";
import frJsonFile from "./locales/fr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enJsonFile },
      fr: { translation: frJsonFile },
    },
    lng: navigator.language,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
