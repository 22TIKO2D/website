<!-- Base layout for every page. -->
<script lang="ts">
  // Use the Poppins font.
  import "@fontsource/poppins/latin-400.css";
  import "@fontsource/poppins/latin-700.css";
  import "@fontsource/poppins/latin-900.css";

  // And Windi CSS.
  import "virtual:windi.css";
  import "$lib/style.css";

  import WIP from "$lib/WIP.svelte";
  import Footer from "$lib/Footer.svelte";
  import BackTop from "$lib/BackTop.svelte";
</script>

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
