<script lang="ts">
  import Meta from "$lib/Meta.svelte";

  import { base } from "$app/paths";
  import { t } from "$lib/translations";
</script>

<Meta title="404" desc="Page Not Found" />

<div class="container mx-auto my-8 px-4">
  <h1 class="my-6 text-4xl font-bold">404</h1>
  <p class="my-6 text-justify">
    {$t("common.not-found")}<br />
    <a class="link" href="{base}/">{$t("common.go-back")}</a>
  </p>
</div>
