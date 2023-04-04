<!-- Theme toggle button to toggle between light and dark. -->
<script lang="ts">
  import Moon from "virtual:icons/ph/moon-fill";
  import Sun from "virtual:icons/ph/sun-fill";

  import { t } from "$lib/translations";

  import darkMode from "$lib/darkMode";
  import { browser } from "$app/environment";

  // If running in the browser.
  if (browser) {
    // Query the dark mode.
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    // If theme is stored, use that, otherwise check what is the browser's preference.
    const initialValue =
      (localStorage.getItem("theme") ?? (query.matches ? "dark" : "light")) == "dark";

    // When the theme changes.
    darkMode.subscribe((value) => {
      // Toggle between having the "dark" class defined in the <html> element or not.
      document.documentElement.classList.toggle("dark", value);

      // And store the value to local storage.
      localStorage.setItem("theme", value ? "dark" : "light");
    });

    // When the browser's preference changes, update the theme value.
    query.addEventListener("change", () => darkMode.update(() => query.matches));

    // Use the initial value.
    darkMode.update(() => initialValue);
  }
</script>

<svelte:head>
  <script>
    // Avoid flash when the page loads by adding the class before anything else renders.
    document
      .querySelector("html")
      .classList.toggle(
        "dark",
        (localStorage.getItem("theme") ??
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) == "dark"
      );
  </script>
</svelte:head>

<!-- Button to toggle between the light and dark themes. -->
<button
  on:click={() => darkMode.update((value) => !value)}
  class="text-2xl"
  title={$t("common.theme")}
>
  <!-- Show moon/sun based on the current theme. -->
  {#if $darkMode}
    <Moon class="block" />
  {:else}
    <Sun class="block" />
  {/if}
</button>
