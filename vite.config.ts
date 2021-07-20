import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8000
  },
  plugins: [vue()],
  resolve: {
    extensions: ['.vue', '.ts', '.js'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
