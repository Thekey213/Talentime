import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import ghPages from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ghPages(), // Add the GitHub Pages plugin here
  ],
  base: '/Talentime/', // Replace 'Talentime' with your repository name
});
