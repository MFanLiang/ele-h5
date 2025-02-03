type Recordable<T = any> = Record<string, T>;

interface ViteEnv {
  /** vite 运行环境 */
  VITE_USER_NODE_ENV: 'development' | 'production';

  /** 项目本地运行端口 */
  VITE_PORT: number;

  /** 公共基础路径 */
  VITE_PUBLIC_PATH: string;
}
