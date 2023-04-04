<!-- Logo list seen at the bottom of the page. -->
<script lang="ts">
  import darkMode from "$lib/darkMode";
  import { locale } from "$lib/translations";

  import eu from "$lib/assets/eu.png";
  import tykky from "$lib/assets/tykky.png";
  import vipuvoimaa from "$lib/assets/vipuvoimaa.png";

  import euDark from "$lib/assets/eu-dark.png";
  import tykkyDark from "$lib/assets/tykky-dark.png";
  import vipuvoimaaDark from "$lib/assets/vipuvoimaa-dark.png";

  import tiko from "$lib/assets/tiko-en.png";
  import tikoDark from "$lib/assets/tiko-en-dark.png";
  import tikoFi from "$lib/assets/tiko-fi.png";
  import tikoFiDark from "$lib/assets/tiko-fi-dark.png";

  import tamk from "$lib/assets/tamk-en.png";
  import tamkDark from "$lib/assets/tamk-en-dark.png";
  import tamkFi from "$lib/assets/tamk-fi.png";
  import tamkFiDark from "$lib/assets/tamk-fi-dark.png";
</script>

<!-- Center the logos. -->
<div class="flex flex-wrap justify-center items-center gap-4 p-2 my-4">
  <!-- Light logos when dark mode is enabled. -->
  {#if $darkMode}
    <img
      src={euDark}
      width="252"
      height="235"
      alt="Euroopan sosiaalirahasto"
      class="max-w-40 sm:max-w-none"
      loading="lazy"
      decoding="async"
    />
    <img
      src={tykkyDark}
      width="227"
      height="261"
      alt="TYKKY"
      class="max-w-40 sm:max-w-none"
      loading="lazy"
      decoding="async"
    />
    <img
      src={vipuvoimaaDark}
      width="242"
      height="161"
      alt="Vipuvoimaa EU:lta"
      class="max-w-40 sm:max-w-none"
      loading="lazy"
      decoding="async"
    />
    <!-- These logos have two language variants. -->
    {#if $locale == "en"}
      <img
        src={tikoDark}
        width="705"
        height="277"
        alt="TIKO"
        class="w-full max-w-80 sm:max-w-100"
        loading="lazy"
        decoding="async"
      />
      <img
        src={tamkDark}
        width="895"
        height="353"
        alt="TAMK"
        class="w-full max-w-80 sm:max-w-100"
        loading="lazy"
        decoding="async"
      />
    {:else}
      <img
        src={tikoFiDark}
        width="705"
        height="277"
        alt="TIKO"
        class="w-full max-w-80 sm:max-w-100"
        loading="lazy"
        decoding="async"
      />
      <img
        src={tamkFiDark}
        width="905"
        height="353"
        alt="TAMK"
        class="w-full max-w-80 sm:max-w-100"
        loading="lazy"
        decoding="async"
      />
    {/if}
    <!-- Dark logos when dark mode is disabled. -->
  {:else}
    <img
      src={eu}
      width="252"
      height="235"
      alt="Euroopan sosiaalirahasto"
      class="max-w-40 sm:max-w-none"
      loading="lazy"
      decoding="async"
    />
    <img
      src={tykky}
      width="227"
      height="261"
      alt="TYKKY"
      class="max-w-40 sm:max-w-none"
      loading="lazy"
      decoding="async"
    />
    <img
      src={vipuvoimaa}
      width="242"
      height="161"
      alt="Vipuvoimaa EU:lta"
      class="max-w-40 sm:max-w-none"
      loading="lazy"
      decoding="async"
    />
    <!-- These logos have two language variants. -->
    {#if $locale == "en"}
      <img
        src={tiko}
        width="705"
        height="277"
        alt="TIKO"
        class="w-full max-w-80 sm:max-w-100"
        loading="lazy"
        decoding="async"
      />
      <img
        src={tamk}
        width="895"
        height="353"
        alt="TAMK"
        class="w-full max-w-80 sm:max-w-100"
        loading="lazy"
        decoding="async"
      />
    {:else}
      <img
        src={tikoFi}
        width="705"
        height="277"
        alt="TIKO"
        class="w-full max-w-80 sm:max-w-100"
        loading="lazy"
        decoding="async"
      />
      <img
        src={tamkFi}
        width="905"
        height="353"
        alt="TAMK"
        class="w-full max-w-80 sm:max-w-100"
        loading="lazy"
        decoding="async"
      />
    {/if}
  {/if}
</div>
