import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'global': 'window',
  },
  server: {
    port: 3000,  // change this to the desired port
  },
})
