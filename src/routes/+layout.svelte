<!-- Base layout for every page. -->
<script lang="ts">
  // Use the Poppins font.
  import "@fontsource/poppins/latin-400.css";
  import "@fontsource/poppins/latin-700.css";
  import "@fontsource/poppins/latin-900.css";

  import font400 from "@fontsource/poppins/files/poppins-latin-400-normal.woff2";
  import font700 from "@fontsource/poppins/files/poppins-latin-700-normal.woff2";
  import font900 from "@fontsource/poppins/files/poppins-latin-900-normal.woff2";

  // And Windi CSS.
  import "virtual:windi.css";
  import "$lib/style.css";

  import WIP from "$lib/WIP.svelte";
  import Footer from "$lib/Footer.svelte";
  import BackTop from "$lib/BackTop.svelte";
</script>

<!-- Preload fonts so they don't switch after page load. -->
<svelte:head>
  <link rel="preload" as="font" href={font400} type="font/woff2" crossorigin />
  <link rel="preload" as="font" href={font700} type="font/woff2" crossorigin />
  <link rel="preload" as="font" href={font900} type="font/woff2" crossorigin />
</svelte:head>

<!-- When the page is smaller than screen height, grow to the screen height. -->
<div class="flex flex-col min-h-screen">
  <WIP />
  <!-- Main content. -->
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>

<!-- Back to the top button outside of the content. -->
<BackTop />
