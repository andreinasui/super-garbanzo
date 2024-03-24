import path from 'path';
import devtools from 'solid-devtools/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

import pkgjson from './package.json';

export default defineConfig({
  base: `/${pkgjson.name}/`,
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    devtools(),
    solidPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
