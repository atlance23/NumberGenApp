import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // This path will be proxied
        target: 'http://localhost:8080/api/generate', // The URL of your backend API
        changeOrigin: true, // Important for changing the origin header
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
