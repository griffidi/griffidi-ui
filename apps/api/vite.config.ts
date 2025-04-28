import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
  },
  server: {
    port: 4003,
    hmr: true,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'koa',
      appPath: './src/index.ts',
      initAppOnBoot: true,
      exportName: 'viteNodeApp',
    }),
  ],
  resolve: {
    alias: {
      '#app': resolve(__dirname, './src'),
      '#app/prisma/client': resolve(
        __dirname,
        './prisma/generated/prisma/client',
      ),
      '#app/prisma/type-graphql': resolve(
        __dirname,
        './prisma/generated/type-graphql',
      ),
      '#app/prisma/seed': resolve(__dirname, './prisma/seed'),
      '@gui/core': resolve(__dirname, '../../packages/core/src'),
    },
    conditions: ['development'],
    dedupe: ['typescript', '@prisma'],
  },
});
