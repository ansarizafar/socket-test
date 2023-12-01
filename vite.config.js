import imba from 'imba/plugin';
import { defineConfig } from 'vite';
import externalize from 'vite-plugin-externalize-dependencies'

export default defineConfig({
	plugins: [
	imba(),
	externalize({
	externals: [/^socket:.*/], 
  }),
	],
	
	resolve: {
		dedupe:['imba']
	  },
	  
	build: {
		outDir: 'imba', 
		rollupOptions: {
		 /*
			external(id) {
			  return id.startsWith('socket:')
			}
			*/
		external: [/^socket:.*/],
		  }
	  },
});
