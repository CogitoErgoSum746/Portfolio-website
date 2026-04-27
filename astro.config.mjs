import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cogitoergosum746.github.io',
  base: '/Portfolio-gracious.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});
