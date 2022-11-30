import { defineConfig } from 'vite';
import config from './vite.config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  ...config,
  base: path.resolve(__dirname, './dist/'),
});
