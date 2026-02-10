import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import * as path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@szd/ui': path.resolve(__dirname, '../ui/src'),
      '@': path.resolve(__dirname, '../ui/src'),
    },
  },
});
