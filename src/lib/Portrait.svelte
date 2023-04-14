<!-- Portrait for everyone in the team. -->
<script lang="ts">
  import hat from "$lib/assets/hat.png";

  export let hatOffset: [number, number];

  // Name of the person.
  export let name: string;

  // Description of the person.
  export let desc: string;

  // JPEG image.
  export let jpg: string;

  // WebP image.
  export let webp: string;
</script>

<!-- Center the portrait. -->
<figure class="flex flex-col justify-stretch max-w-300px">
  <div class="relative">
    <picture>
      <!-- Use WebP when the browser supports it. -->
      <source type="image/webp" srcset={webp} />
      <!-- Or default back to the JPEG format. -->
      <img
        src={jpg}
        alt={name}
        width="300"
        height="300"
        loading="lazy"
        decoding="async"
        class="rounded-t-xl"
      />
    </picture>
    <!-- Hat image seen when hovering over. -->
    <img
      src={hat}
      alt=""
      width="150"
      height="150"
      loading="lazy"
      decoding="async"
      class="absolute hat"
      style="left: {hatOffset[0]}%; top: {hatOffset[1]}%"
    />
  </div>
  <!-- Show the name as a caption. -->
  <figcaption
    class="h-full flex flex-col justify-center gap-2 text-center bg-blue-200 px-2 py-4 border-b-4 border-blue-300 rounded-b-xl shadow-md shadow-teal-800/20 dark:(bg-zinc-700 border-zinc-800 shadow-zinc-900/60) transition-all"
  >
    <h3 class="font-bold text-xl">{name}</h3>
    <span>{desc}</span>
  </figcaption>
</figure>

<style>
  .hat {
    opacity: 0;
    transition: opacity 0.2s;
    width: 50%;
    height: 50%;
  }

  figure:hover .hat {
    opacity: 1;
  }
</style>
