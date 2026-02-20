import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'; // 1. Importamos astro-icon

// https://astro.build/config
export default defineConfig({
  integrations: [icon()], // 2. Lo agregamos a las integraciones
  vite: {
    plugins: [tailwindcss()],
  },
});