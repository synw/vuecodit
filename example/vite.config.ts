import path from 'path'
import { defineConfig } from 'vite'
import typescript2 from "rollup-plugin-typescript2"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    typescript2({
      check: false,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      clean: true
    }),
    vue(),
  ],
  base: process.env.NODE_ENV === 'production' ? '/vuecodit/' : './',
  resolve: {
    alias: [
      { find: '@/', replacement: '/src/' },
      {
        find: 'vue',
        replacement: path.resolve("./node_modules/vue"),
      },
    ]
  },
})