<script lang="ts">
  import darkMode from "$lib/darkMode";

  import eu from "$lib/assets/eu.png";
  import tykky from "$lib/assets/tykky.png";
  import vipuvoimaa from "$lib/assets/vipuvoimaa.png";

  import euDark from "$lib/assets/eu-dark.png";
  import tykkyDark from "$lib/assets/tykky-dark.png";
  import vipuvoimaaDark from "$lib/assets/vipuvoimaa-dark.png";
</script>

<div class="flex flex-wrap justify-center items-center gap-4 p-2 my-4">
  {#if $darkMode}
    <img src={euDark} width="252" height="235" alt="Euroopan sosiaalirahasto" />
    <img src={tykkyDark} width="227" height="261" alt="TYKKY" />
    <img src={vipuvoimaaDark} width="242" height="161" alt="Vipuvoimaa EU:lta" />
  {:else}
    <img src={eu} width="252" height="235" alt="Euroopan sosiaalirahasto" />
    <img src={tykky} width="227" height="261" alt="TYKKY" />
    <img src={vipuvoimaa} width="242" height="161" alt="Vipuvoimaa EU:lta" />
  {/if}
</div>
