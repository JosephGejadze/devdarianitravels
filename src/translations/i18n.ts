import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./resources/en.json";
import ka from "./resources/ka.json";

export type Language = "en" | "ka";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    resources: { en, ka },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    supportedLngs: ["en", "ka"],
    react: { useSuspense: true },
  });

export default i18n;
