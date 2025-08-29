import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If deploying to a custom domain, keep '/'
  // If deploying to GitHub Pages under a repo, replace with '/<repo-name>/'
  base: '/'
})
