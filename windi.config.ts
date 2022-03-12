import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  extract: {
    include: ['pages/**/*.{vue,html,mdx,pug,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})
