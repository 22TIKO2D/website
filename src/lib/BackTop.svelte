<!--
Back to the top button found in the lower right corner of the screen.
Uses fixed position to stay in place and fades in when scrolled half screen down.
-->
<script lang="ts">
  import { fade } from "svelte/transition";

  import Arrow from "virtual:icons/material-symbols/arrow-circle-up-rounded";

  // Scroll position from the top of the page.
  let y = 0;

  // Visible viewport's height.
  let h = 0;
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

{#if y > h / 2}
  <a
    href="#top"
    transition:fade={{ duration: 200 }}
    class="fixed right-2 bottom-2 text-6xl bg-blue-200 text-blue-800 hover:(text-blue-600 cursor-pointer) rounded-full opacity-100 z-3 dark:(text-blue-300 bg-slate-700) dark:hover:text-blue-400 transition-colors"
  >
    <Arrow class="block" />
  </a>
{/if}
