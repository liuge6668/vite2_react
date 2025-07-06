import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "./src/assets/less/variables.less";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'common': path.resolve(__dirname, './common'),
      'components': path.resolve(__dirname, './components'),
      'pages': path.resolve(__dirname, './pages'),
      'utils': path.resolve(__dirname, './utils'),
      'types': path.resolve(__dirname, './types'),
      'assets': path.resolve(__dirname, './assets'),
    },
  },
});