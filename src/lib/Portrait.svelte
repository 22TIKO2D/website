<!-- Portrait for everyone in the team. -->
<script lang="ts">
  // Name of the person.
  export let name;

  // JPEG image.
  export let jpg;

  // WebP image.
  export let webp;
</script>

<!-- Center the portrait. -->
<figure class="flex flex-col justify-center">
  <picture>
    <!-- Use WebP when the browser supports it. -->
    <source type="image/webp" srcset={webp} />
    <!-- Or default back to the JPEG format. -->
    <img
      src={jpg}
      alt={name}
      width="200"
      height="200"
      loading="lazy"
      decoding="async"
      class="rounded-t-xl"
    />
  </picture>
  <!-- Show the name as a caption. -->
  <figcaption
    class="text-center font-bold bg-blue-200 p-2 border-b-4 border-blue-300 rounded-b-xl shadow-md shadow-teal-800/20 dark:(bg-zinc-700 border-zinc-800 shadow-zinc-900/60) transition-all"
  >
    {name}
  </figcaption>
</figure>
