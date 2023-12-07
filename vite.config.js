import { defineConfig } from 'vite'
import externalize from 'vite-plugin-externalize-dependencies'
import imba from 'imba/plugin'
import path from 'node:path'

const dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  root: 'src',
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
    outDir: path.resolve(dirname, 'build/imba'),
    rollupOptions: {
      external: [/^socket:.*/],
      input: {
        app: 'src/index.html'
      }
    }
  }
})
