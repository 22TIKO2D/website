<!-- Meta tags in the head. -->
<script lang="ts">
  // Title for the page.
  export let title = undefined;

  // Description for the page.
  export let desc;

  // Main title on the page.
  const pageTitle = "22TIKO2D";
</script>

<svelte:head>
  {#if title}
    <!-- When the title is defined show (title, dot, page's title). -->
    <title>{title} &middot; {pageTitle}</title>
  {:else}
    <!-- When the title is not defined show only page's title. -->
    <title>{pageTitle}</title>
  {/if}

  <meta name="description" content={desc} />
</svelte:head>
