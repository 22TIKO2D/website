<script lang="ts">
  export let title = undefined;
  export let desc;

  const pageTitle = "22TIKO2D";
</script>

<svelte:head>
  {#if title}
    <title>{title} &middot; {pageTitle}</title>
  {:else}
    <title>{pageTitle}</title>
  {/if}

  <meta name="description" content={desc} />
</svelte:head>
