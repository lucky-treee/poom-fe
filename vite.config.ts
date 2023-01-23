import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigpaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigpaths()],
});
