import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [sveltekit(), WindiCSS(), Icons({ compiler: "svelte" })]
});
