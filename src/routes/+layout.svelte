<script lang="ts">
  import "@fontsource/poppins/latin-400.css";
  import "@fontsource/poppins/latin-700.css";
  import "@fontsource/poppins/latin-900.css";

  import "virtual:windi.css";
  import "$lib/style.css";

  import WIP from "$lib/WIP.svelte";
  import Footer from "$lib/Footer.svelte";
  import BackTop from "$lib/BackTop.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <WIP />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>
<BackTop />
