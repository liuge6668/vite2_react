import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'src/mock', // mock 文件目录
      // enable: process.env.NODE_ENV === 'development', // 动态控制仅在 dev 启用
      enable: true,
      watchFiles: true, // 监听文件变化并自动更新 mock 规则
      logger: true // 显示日志信息
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "./src/assets/less/variables.less";`
      }
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.less', '.css'],
    alias: {
      '@': path.join(__dirname, 'src'),
      common: path.join(__dirname, 'src/common'),
      components: path.join(__dirname, 'src/components'),
      pages: path.join(__dirname, 'src/pages'),
      utils: path.join(__dirname, 'src/utils'),
      types: path.join(__dirname, 'src/types'),
      assets: path.join(__dirname, 'src/assets'),
      models: path.join(__dirname, 'src/models')
    }
  },
  optimizeDeps: {
    exclude: ['/node_modules/', '/public/', '/dist/', '/__test__/', '/mock/', '/coverage/']
  }
})
