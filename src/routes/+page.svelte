<!-- Main page for the game. -->
<script lang="ts">
  import GitHub from "virtual:icons/mdi/github";

  import { t } from "$lib/translations";

  import Meta from "$lib/Meta.svelte";
  import Install from "$lib/Install.svelte";
  import Portrait from "$lib/Portrait.svelte";

  import logo from "$lib/assets/logo.png";
  import logox2 from "$lib/assets/logo-x2.png";

  import alexJpg from "$lib/assets/alex.jpg";
  import alexWebp from "$lib/assets/alex.webp";

  import jarkkoJpg from "$lib/assets/jarkko.jpg";
  import jarkkoWebp from "$lib/assets/jarkko.webp";

  import neeaJpg from "$lib/assets/neea.jpg";
  import neeaWebp from "$lib/assets/neea.webp";

  import roosaJpg from "$lib/assets/roosa.jpg";
  import roosaWebp from "$lib/assets/roosa.webp";
</script>

<Meta title="Tie Työhön" desc={$t("common.desc")} />

<!-- Cool looking gradient at the top of the page. -->
<div
  class="h-40 w-full absolute top-0 -z-1 bg-gradient-to-b from-blue-200 to-transparent dark:from-slate-800 transition-colors"
/>

<!-- Main content container. -->
<div class="container mx-auto my-8 px-4">
  <!-- Title text with a gradient filled text. -->
  <h1 class="flex justify-center text-6xl font-black my-4 text-indigo-400">
    <picture>
      <source srcset={`${logo} 1x, ${logox2} 2x`} type="image/png" />
      <img src={logo} alt="Tie Työhön" width="400" height="223" />
    </picture>
  </h1>

  <!-- Install the game button. -->
  <Install link="https://play.google.com/store/apps/details?id=com.TAMK_22TIKO2D.TieTyohon" />

  <!-- Center the link. -->
  <div class="text-center">
    <!-- Link to the game's source code. -->
    <a
      href="https://github.com/22TIKO2D/GAME-PROJECT-GOTY-2023"
      class="link"
      rel="external"
      target="_blank"
    >
      <GitHub class="align-middle" />
      <span class="align-middle">{$t("common.browse-code")}</span>
    </a>
  </div>

  <!-- Trailer video for the game. -->
  <iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    class="w-full h-auto aspect-video my-4 rounded-xl bg-black shadow-lg shadow-gray-800/30 dark:shadow-zinc-900/80"
    allowfullscreen
  />

  <h2>{$t("common.subtitle")}</h2>

  <p>{$t("common.content")}</p>

  <h2>{$t("common.people")}</h2>

  <!-- Portrait pictures for everyone in the team. -->
  <div class="grid gap-4 justify-items-center my-6 sm:grid-cols-2 lg:grid-cols-4">
    <Portrait
      hatOffset={[28, -25]}
      name="Alex Yli-Paavalniemi"
      desc={$t("common.alex")}
      jpg={alexJpg}
      webp={alexWebp}
    />
    <Portrait
      hatOffset={[31, -27]}
      name="Jarkko Kuukkanen"
      desc={$t("common.jarkko")}
      jpg={jarkkoJpg}
      webp={jarkkoWebp}
    />
    <Portrait
      hatOffset={[38, -23]}
      name="Neea Merivirta"
      desc={$t("common.neea")}
      jpg={neeaJpg}
      webp={neeaWebp}
    />
    <Portrait
      hatOffset={[28, -21]}
      name="Roosa Pasanen"
      desc={$t("common.roosa")}
      jpg={roosaJpg}
      webp={roosaWebp}
    />
  </div>
</div>

<style>
  /* All the paragraphs share the same style. */
  p {
    @apply my-6 text-justify;
  }

  /* All the subtitles share the same style. */
  h2 {
    @apply text-3xl font-black text-center my-8;
  }
</style>
