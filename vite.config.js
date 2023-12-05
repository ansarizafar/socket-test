import { defineConfig } from 'vite'
import externalize from 'vite-plugin-externalize-dependencies'
import imba from 'imba/plugin'

export default defineConfig({
  plugins: [
    imba(),
    externalize({
      externals: [/^socket:.*/]
    })
  ],

  resolve: {
    dedupe: ['imba']
  },

  build: {
    outDir: 'build/imba',
    rollupOptions: {
      external: [/^socket:.*/],
      input: {
        app: 'src/index.html'
      }
    }
  }
})
