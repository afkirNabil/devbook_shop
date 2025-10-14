// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
      plugins: [tailwindcss()],
    },

  env: {
      schema: {								//puede estar en client
          SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }), //lee la variable de env y la tipa
          SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' })
      }
    },

  adapter: vercel()
});