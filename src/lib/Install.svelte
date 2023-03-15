<script lang="ts">
  import PlayStore from "virtual:icons/bxl/play-store";

  import { t } from "$lib/translations";

  export let link;
</script>

<div class="w-full flex justify-center">
  <a
    href={link}
    class="inline-block font-black px-4 py-2 text-2xl bg-blue-900 text-sky-100 border-3 border-sky-600 rounded-xl my-4 shadow-md shadow-teal-800/40 hover:(bg-blue-800 border-sky-500 shadow-sm shadow-teal-800/40) transition-all"
    rel="external"
    target="_blank"
  >
    <PlayStore class="align-middle" />
    <span class="align-middle">{$t("common.install-now")}</span>
  </a>
</div>
