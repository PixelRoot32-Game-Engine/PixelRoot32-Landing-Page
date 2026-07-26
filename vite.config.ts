import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Prefer the hyphenated clone (PR branches) over the legacy spaced folder name.
const localLibCandidates = [
  path.resolve(__dirname, '../PixelRoot32-Components-Landing-Page'),
  path.resolve(__dirname, '../PixelRoot32 Components Landing Page'),
]
const localLibPath = localLibCandidates.find((candidate) => fs.existsSync(candidate))
const isLocalDev = Boolean(localLibPath)

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      'pixelroot32-components-landing-page/src': isLocalDev
        ? path.resolve(localLibPath!, 'src')
        : path.resolve(__dirname, 'node_modules/pixelroot32-components-landing-page/src'),
      'pixelroot32-components-landing-page': isLocalDev
        ? path.resolve(localLibPath!, 'src/index.ts')
        : path.resolve(__dirname, 'node_modules/pixelroot32-components-landing-page/src/index.ts')
    }
  },
  server: {
    fs: {
      allow: [
        __dirname,
        ...(localLibPath ? [localLibPath] : []),
      ],
    },
  },
  // Use root path for custom domain (pixelroot32.org)
  // If deploying to GitHub Pages subdirectory, change to '/repository-name/'
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
