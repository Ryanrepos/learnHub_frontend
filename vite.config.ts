import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Bu modulni import qilamiz

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@' belgisini 'src' papkasiga bog'laymiz
      '@': path.resolve(__dirname, './src'),
    },
  },
})