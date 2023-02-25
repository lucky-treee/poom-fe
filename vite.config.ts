import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import svgr from 'vite-plugin-svgr';
import tsconfigpaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigpaths(), VitePluginHtmlEnv(), svgr()],
  server: {
    proxy: {
      '^/api/shop/.*': {
        target: 'https://poom-shop.c0dewave.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/shop/, ''),
      },
      '^/api/auth/.*': {
        target: 'https://poom-auth.c0dewave.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/auth/, ''),
      },
    },
  },
});
