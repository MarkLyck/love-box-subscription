import path from 'path'
import { defineConfig } from 'vite'

// plugins
import ssr from 'vite-plugin-ssr/plugin'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  resolve: {
    alias: {
      'src/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    reactRefresh(),
    ssr(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),
  ],
})
