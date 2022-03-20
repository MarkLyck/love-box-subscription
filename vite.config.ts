import path from 'path'
import { defineConfig } from 'vite'

// plugins
import ssr from 'vite-plugin-ssr/plugin'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  resolve: {
    alias: {
      'src/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Unocss({
      presets: [presetAttributify(), presetUno()],
    }),
    react(),
    ssr(),
  ],
})
