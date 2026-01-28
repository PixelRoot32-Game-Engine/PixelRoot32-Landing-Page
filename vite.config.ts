import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  // Use root path for custom domain (pixelroot32.org)
  // If deploying to GitHub Pages subdirectory, change to '/repository-name/'
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
