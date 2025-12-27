import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    global: 'globalThis',       // Fix "global is not defined"
  }
});