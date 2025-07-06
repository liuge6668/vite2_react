import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('请求出错:', error.message);
    return Promise.reject(error);
  }
);

export type RequestMethod = 'get' | 'post' | 'put' | 'delete';

export const request = <T = any>(
  url: string,
  method: RequestMethod = 'get',
  config: AxiosRequestConfig = {}
): AxiosPromise<T> => {
  return service({
    url,
    method,
    ...config,
  });
};

export default service;