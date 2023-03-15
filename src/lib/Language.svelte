<script lang="ts">
  import { t, locale } from "$lib/translations";
  import { browser } from "$app/environment";

  if (browser) {
    locale.set(localStorage.getItem("lang") || locale.get());
    locale.subscribe((value) => localStorage.setItem("lang", value));
  }
</script>

<button
  class="bg-blue-200 border-cyan-600 hover:(bg-sky-200 border-cyan-400) border text-black p-1 rounded-md transition-colors dark:(bg-slate-800 text-white border-cyan-800) dark:hover:(bg-slate-600 border-cyan-600)"
  on:click={() => ($locale = $locale == "en" ? "fi" : "en")}
>
  {$t(`lang.${$locale == "en" ? "fi" : "en"}`)}
</button>
