import { defineConfig } from "astro/config";
import deno from "freestyle-deno-astro-adapter";

export default defineConfig({
  adapter: deno(),
  output: "server",
});
