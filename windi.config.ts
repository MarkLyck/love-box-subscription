import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: {
    prefix: 'w:',
  },
  extract: {
    include: ['pages/**/*.{vue,html,mdx,pug,jsx,tsx}', 'src/**/*.{vue,html,mdx,pug,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})
