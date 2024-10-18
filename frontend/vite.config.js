import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
  },
  // Optional: Base path for deployment, can be adjusted based on your app's routing
  base: '/', // Use '/' for the root of the domain
});
