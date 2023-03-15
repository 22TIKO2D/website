import { loadTranslations, locale } from "$lib/translations";
import type { LayoutLoad } from "./$types";

export const prerender = true;
export const trailingSlash = "always";

export const load: LayoutLoad = async () => {
  await loadTranslations(locale.get() || "en");

  return {};
};
