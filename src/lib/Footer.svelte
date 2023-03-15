<script lang="ts">
  import Portal from "virtual:icons/material-symbols/captive-portal-rounded";
  import GitHub from "virtual:icons/mdi/github";

  import { t } from "$lib/translations";

  import Logos from "$lib/Logos.svelte";
  import Language from "$lib/Language.svelte";
  import ThemeToggle from "$lib/ThemeToggle.svelte";
</script>

<Logos />
<footer class="z-4">
  <div class="px-4 py-6 w-full bg-blue-100 dark:bg-zinc-800">
    <div
      class="flex flex-col sm:flex-row items-center gap-4 max-w-screen-sm mx-auto justify-center"
    >
      <div class="flex flex-wrap items-center gap-4 justify-center">
        <a class="link" href="https://webpages.tuni.fi/22tiko/">
          <Portal class="align-middle" />
          <span class="align-middle">{$t("common.portal")}</span>
        </a>
        <a class="link" href="https://github.com/22TIKO2D/website" rel="external" target="_blank">
          <GitHub class="align-middle" />
          <span class="align-middle">{$t("common.source")}</span>
        </a>
      </div>
      <div class="flex flex-wrap items-center gap-4 justify-center">
        <Language />
        <ThemeToggle />
      </div>
    </div>
  </div>
</footer>
