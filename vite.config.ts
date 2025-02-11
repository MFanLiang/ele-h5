import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { wrapperEnv } from './build';

// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir);
};

// 设置别名，还可以添加其他路径
const alias: Record<string, string> = {
  '@': pathResolve('src'),
  '@views': pathResolve('src/views'),
  '@store': pathResolve('src/store'),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  return {
    base: viteEnv.VITE_PUBLIC_PATH,
    plugins: [vue()],
    resolve: {
      alias,
    },
    server: {
      host: '0.0.0.0',
      port: viteEnv.VITE_PORT,
      // https: false,
      open: true,
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        '^/api': {
          target: 'http://192.168.3.5:5050',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      // 启用 css 预处理器
      preprocessorOptions: {
        scss: {
          // 引入 mixin.scss，在项目全局下使用 mixin 样式规则
          additionalData: '@import "@/assets/style/mixin.scss";',
        },
      },
    },
  };
});
