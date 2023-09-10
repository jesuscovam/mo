import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
  plugins: [sveltekit(), svg()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  server: {
    host: true
  },
  resolve: {
    alias: {
      $fonts: resolve('./static/fonts')
    }
  }
});
