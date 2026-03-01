import { defineConfig } from 'tsup';
import * as path from 'node:path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  clean: true,
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.alias = {
      '@': path.resolve(__dirname, 'src'),
    };
  },
  onSuccess: 'tailwindcss -i ./src/styles.css -o ./dist/index.css',
});
