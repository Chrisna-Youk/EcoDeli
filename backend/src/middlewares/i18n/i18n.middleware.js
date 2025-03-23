import i18next from "i18next";
import Backend from "i18next-fs-backend";
import { LanguageDetector, handle } from "i18next-http-middleware";

const backend = new Backend({
  loadPath: "/resources/locales/{{lng}}/translation.json",
});

const i18nMiddleware = () => {
  i18next
    .use(backend)
    .use(LanguageDetector)
    .init({
      fallbackLng: "en", // Langue par défaut
      backend: {
        loadPath: "./locales/{{lng}}/translation.json",
      },
    });
  return handle(i18next);
};

export default i18nMiddleware;
