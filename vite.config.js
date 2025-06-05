import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/reactrouter/', // cambiá por el nombre correcto del repo
  plugins: [react()]
});
