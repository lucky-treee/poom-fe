import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';
import tsconfigpaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigpaths(), VitePluginHtmlEnv(), svgr(), mkcert()],
  server: {
    host: 'local-poom.c0dewave.com',
    https: true,
    proxy: {
      '^/api/shop/.*': {
        target: 'https://poom-shop.c0dewave.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/shop/, ''),
      },
      '^/api/auth/.*': {
        target: 'https://poom-member.c0dewave.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/auth/, ''),
      },
    },
  },
});
