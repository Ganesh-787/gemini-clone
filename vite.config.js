import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/gemini-clone/",
  server: {
    proxy: {
      '/api': {
        target: 'https://your-gemini-api-url.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      host: '0.0.0.0',
    },
  },
});
