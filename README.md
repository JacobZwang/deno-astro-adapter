# freestyle-deno-astro-adapter

This adapter allows Astro to deploy your SSR site to freestyle.sh.

## Configuration
Install the Freestyle adapter to your project’s dependencies using your preferred package manager.
```sh
npm install -D freestyle-deno-astro-adapter
```

Update your `astro.config.mjs` project configuration file with the changes below.
```js
import { defineConfig } from "astro/config";
import freestyle from "freestyle-deno-astro-adapter";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  adapter: freestyle(),
  output: "server",
  vite: {
    ssr: {
      external: ["freestyle-sh"],
    },
    esbuild: {
      target: "esnext",
      format: "esm",
      platform: "node",
      keepNames: true,
    },
  },
});
```
If you want to allow cloudstate classes to be called from frontend, add this route.
```typescript
// src/pages/cloudstate/[...slug].ts

import type { APIRoute } from "astro";
import { cloudStateRequestHandler } from "freestyle-sh";

// in the future this route won't be necessary, but for now it's used to pass
// through client requests to cloudstate methods
export const POST: APIRoute = ({ request }) => {
  return cloudStateRequestHandler(request);
};
```
