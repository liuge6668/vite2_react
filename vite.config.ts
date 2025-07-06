import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteMockServe } from "vite-plugin-mock"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "src/mock", // mock 文件目录
      // enable: process.env.NODE_ENV === 'development', // 动态控制仅在 dev 启用
      enable: true,
      watchFiles: true, // 监听文件变化并自动更新 mock 规则
      logger: true, // 显示日志信息
    }),
  ],
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