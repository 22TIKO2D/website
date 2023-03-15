<!-- Footer element seen in the bottom of the page. -->
<script lang="ts">
  import Portal from "virtual:icons/material-symbols/captive-portal-rounded";
  import GitHub from "virtual:icons/mdi/github";

  import { t } from "$lib/translations";

  import Logos from "$lib/Logos.svelte";
  import Language from "$lib/Language.svelte";
  import ThemeToggle from "$lib/ThemeToggle.svelte";
</script>

<Logos />

<!-- "z-4" Show above the back to the top button as it would otherwise occlude the links. -->
<footer class="z-4 px-4 py-6 w-full bg-blue-100 dark:bg-zinc-800 transition-colors">
  <div class="flex flex-col sm:flex-row items-center gap-4 max-w-screen-sm mx-auto justify-center">
    <!-- Top/left content. -->
    <div class="flex flex-wrap items-center gap-4 justify-center">
      <!-- Link back to the portal. -->
      <a class="link" href="https://webpages.tuni.fi/22tiko/">
        <Portal class="align-middle" />
        <span class="align-middle">{$t("common.portal")}</span>
      </a>
      <!-- Link to the website's source code. -->
      <a class="link" href="https://github.com/22TIKO2D/website" rel="external" target="_blank">
        <GitHub class="align-middle" />
        <span class="align-middle">{$t("common.source")}</span>
      </a>
    </div>
    <!-- Bottom/right content. -->
    <div class="flex flex-wrap items-center gap-4 justify-center">
      <Language />
      <ThemeToggle />
    </div>
  </div>
</footer>
