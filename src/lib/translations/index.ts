import i18n from "sveltekit-i18n";

export const { t, locale, locales, loading, loadTranslations } = new i18n({
  initLocale: "fi",
  fallbackLocale: "fi",
  loaders: [
    {
      locale: "fi",
      key: "common",
      loader: async () => (await import("./fi/common.json")).default
    },
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default
    }
  ]
});
