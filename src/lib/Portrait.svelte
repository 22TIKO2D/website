<script lang="ts">
  export let name;
  export let jpg;
  export let webp;
</script>

<figure class="flex flex-col justify-center">
  <picture>
    <source type="image/webp" srcset={webp} />
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
  <figcaption
    class="text-center font-bold bg-blue-200 p-2 border-b-4 border-blue-300 rounded-b-xl shadow-md shadow-teal-800/20 dark:(bg-zinc-700 border-zinc-800 shadow-zinc-900/60)"
  >
    {name}
  </figcaption>
</figure>
