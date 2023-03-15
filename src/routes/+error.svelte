<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  import { t } from "$lib/translations";

  import Meta from "$lib/Meta.svelte";
</script>

<Meta title={$page.status} desc={$page.error.message} />

<div class="container mx-auto my-8 px-4">
  <h1 class="my-6 text-4xl font-bold">{$page.status}</h1>
  <p class="my-6 text-justify">
    {$page.error.message}<br />
    <a class="link" href="{base}/">{$t("common.go-back")}</a>
  </p>
</div>
