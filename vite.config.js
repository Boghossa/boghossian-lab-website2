// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy under a subpath (e.g. GitHub Pages), put it here.
// If not, leave it as '/'.
const PROD_BASE = '/boghossian-lab-website2/'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use root base in dev so images load under `npm run dev`
  base: mode === 'production' ? PROD_BASE : '/',
  build: { outDir: 'docs' }
}))
