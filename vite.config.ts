/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 8080,
    open: true,
  },
  test: {
    globals: true, // use vitest APIs globally
    environment: 'jsdom',
    setupFiles: ['./src/test-setup'], // will be run before each test file
  },
});
