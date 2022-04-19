import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  base:'/my-manage/dist',
  plugins: [
    vue(),
    AutoImport ({
      imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
      dts: "src/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
    })
  ],
  resolve:{
    alias:{
      '@': path.resolve('./src'),
      comp: path.resolve('./src/components'),
      assets: path.resolve('./src/assets'),
      router: path.resolve('./src/router'),
      store: path.resolve('./src/store'),
      views: path.resolve('./src/views'),
    }
  },
  server:{
    open: true,
    host: true,
  },
  
})
