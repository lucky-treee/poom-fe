import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigpaths from 'vite-tsconfig-paths';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

export default defineConfig({
  plugins: [react(), tsconfigpaths(), VitePluginHtmlEnv()],
});
