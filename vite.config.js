import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root: resolve(projectRoot, 'src'),
  publicDir: resolve(projectRoot, 'public'),
  plugins: [react()],
  base: './',
  build: {
    outDir: resolve(projectRoot, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(projectRoot, 'src/index.html'),
    },
  },
})
