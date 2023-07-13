import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // give vite the ability to resolve imports using TypeScript's path mapping.
    tsconfigPaths(),
    // enable emitting decorator metadata
    react({
      babel: {
        plugins: ['babel-plugin-transform-typescript-metadata'],
        parserOpts: {
          plugins: ['decorators-legacy'],
        },
      },
    }),
  ],
});
