import { defineConfig } from 'vite'   // 👈 必须加

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },
})
