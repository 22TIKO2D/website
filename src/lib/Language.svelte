<!-- Language switch button. -->
<script lang="ts">
  import { t, locale, locales } from "$lib/translations";
  import { browser } from "$app/environment";

  // If running in the browser.
  if (browser) {
    // Get the language. "en-US" becomes "en" and "fi-FI" becomes "fi".
    let browserLang = navigator.language.split("-")[0] || locale.get();
    // If user has some other language selected in the browser settings, default back to the initial value.
    if (locales.get().indexOf(browserLang) < 0) browserLang = locale.get();
    // If the language is stored, use that, otherwise use the browser's language.
    locale.set(localStorage.getItem("lang") || browserLang);
    // Save to the local storage whenever the language changes.
    locale.subscribe((value) => {
      // Save to local storage.
      localStorage.setItem("lang", value);
      // Set the <html> element's language.
      document.documentElement.setAttribute("lang", value);
    });
  }
</script>

<!-- Button to toggle between "en" and "fi" locales. -->
<button
  class="bg-blue-200 border-cyan-600 hover:(bg-sky-200 border-cyan-400) border text-black p-1 rounded-md transition-colors dark:(bg-slate-800 text-white border-cyan-800) dark:hover:(bg-slate-600 border-cyan-600)"
  on:click={() => ($locale = $locale == "fi" ? "en" : "fi")}
>
  {$t(`common.lang`)}
</button>
