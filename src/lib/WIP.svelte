<script lang="ts">
  import Close from "virtual:icons/ic/round-close";

  import { t } from "$lib/translations";

  let closed = false;
</script>

{#if !closed}
  <div
    class="w-full sticky top-0 bg-yellow-300 text-red-800 p-2 text-lg shadow-md shadow-yellow-700/20 z-2"
  >
    <div class="flex gap-2 items-center max-w-screen-md mx-auto">
      <span class="flex-grow font-bold text-center">{$t("common.wip")}</span>
      <button
        class="rounded-full hover:bg-yellow-400 transition-colors"
        title="close"
        on:click={() => (closed = true)}><Close class="min-w-5 text-rose-900 block" /></button
      >
    </div>
  </div>
{/if}
