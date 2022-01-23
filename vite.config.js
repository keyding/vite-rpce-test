import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { chromeExtension } from 'rollup-plugin-chrome-extension'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), chromeExtension()]
})