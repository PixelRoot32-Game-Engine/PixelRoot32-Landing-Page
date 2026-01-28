import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/PixelRoot32-Landing-Page/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
