/**
 * 创建实例，可以多个，当需要请求多个不同域名的接口时
 */
import Request from './request';
import { getToken } from '@/utils/auth';

const defRequest = new Request({
  baseURL: '/api',
  timeout: 5000,
  showLoading: true,
  interceptorHooks: {
    requestInterceptor: config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    requestInterceptorCatch: err => {
      return err;
    },
    responseInterceptor: res => {
      return res.data;
    },
    responseInterceptorCatch: err => {
      return Promise.reject(err);
    },
  },
});

// 创建其他示例，然后导出
// const otherRequest = new Request({...})

export { defRequest };
