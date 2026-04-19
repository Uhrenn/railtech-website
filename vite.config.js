import { defineConfig } from 'vite';

export default defineConfig({
  base: '/railtech-website/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});