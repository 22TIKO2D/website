import i18n from "sveltekit-i18n";
import lang from "./lang.json";

export const { t, locale, locales, loading, loadTranslations } = new i18n({
  initLocale: "en",
  fallbackLocale: "en",
  translations: {
    en: { lang },
    fi: { lang }
  },
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default
    },
    {
      locale: "fi",
      key: "common",
      loader: async () => (await import("./fi/common.json")).default
    }
  ]
});
