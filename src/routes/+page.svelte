<!-- Main page for the game. -->
<script lang="ts">
  import GitHub from "virtual:icons/mdi/github";

  import { t } from "$lib/translations";

  import Meta from "$lib/Meta.svelte";
  import Install from "$lib/Install.svelte";
  import Portrait from "$lib/Portrait.svelte";

  import chadJpg from "$lib/assets/chad.jpg";
  import chadWebp from "$lib/assets/chad.webp";
</script>

<Meta
  title="Tie Työhön"
  desc="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
/>

<!-- Cool looking gradient at the top of the page. -->
<div
  class="h-40 w-full absolute top-0 -z-1 bg-gradient-to-b from-blue-200 to-transparent dark:from-slate-800 transition-colors"
/>

<!-- Main content container. -->
<div class="container mx-auto my-8 px-4">
  <!-- Title text with a gradient filled text. -->
  <h1
    class="text-center text-6xl font-black my-4 text-transparent bg-clip-text bg-gradient-to-br from-teal-400 via-indigo-400 to-purple-400"
  >
    Tie Työhön
  </h1>

  <!-- Install the game button. -->
  <Install link="https://play.google.com/store/apps/details?id=com.tencent.ig" />

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

  <p>
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
    reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
    reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
    ullamco ut ea consectetur et est culpa et culpa duis.
  </p>
  <p>
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
    reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
    reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
    ullamco ut ea consectetur et est culpa et culpa duis.
  </p>
  <p>
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
    reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
    reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
    ullamco ut ea consectetur et est culpa et culpa duis.
  </p>
  <p>
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
    reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
    reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
    ullamco ut ea consectetur et est culpa et culpa duis.
  </p>

  <!-- Portrait pictures for everyone in the team. -->
  <div class="grid gap-4 justify-items-center my-6 grid-cols-2 md:grid-cols-4">
    <Portrait name="Chad" img="chad" jpg={chadJpg} webp={chadWebp} />
    <Portrait name="Chad" img="chad" jpg={chadJpg} webp={chadWebp} />
    <Portrait name="Chad" img="chad" jpg={chadJpg} webp={chadWebp} />
    <Portrait name="Chad" img="chad" jpg={chadJpg} webp={chadWebp} />
  </div>

  <p>
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat
    reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
    reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat
    ullamco ut ea consectetur et est culpa et culpa duis.
  </p>
</div>

<style>
  /* All the paragraphs share the same style. */
  p {
    @apply my-6 text-justify;
  }
</style>
