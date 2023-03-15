<script lang="ts">
  import Moon from "virtual:icons/ph/moon-fill";
  import Sun from "virtual:icons/ph/sun-fill";

  import { t } from "$lib/translations";

  import darkMode from "$lib/darkMode";
  import { browser } from "$app/environment";

  if (browser) {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const initialValue =
      (localStorage.getItem("theme") ?? (query.matches ? "dark" : "light")) == "dark";

    const html = document.querySelector("html");

    darkMode.subscribe((value) => {
      if (value) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    });

    darkMode.subscribe((value) => localStorage.setItem("theme", value ? "dark" : "light"));

    query.addEventListener("change", () => darkMode.update(() => query.matches));

    if (initialValue) {
      darkMode.update(() => true);
    } else {
      darkMode.update(() => false);
    }
  }
</script>

<button
  on:click={() => darkMode.update((value) => !value)}
  class="text-2xl"
  title={$t("common.theme")}
>
  {#if $darkMode}
    <Moon class="block" />
  {:else}
    <Sun class="block" />
  {/if}
</button>
