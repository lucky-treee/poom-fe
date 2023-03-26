import axios from 'axios';
import config from 'config';

const createService = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

export const ShopService = createService(config.shopApiHost);

export const AuthService = createService(config.authApiHost);

export const setAuthServiceToken = (token: string) => {
  AuthService.interceptors.request.use((authConfig) => {
    // eslint-disable-next-line no-param-reassign
    authConfig.headers.Authorization = `Bearer ${token}`;

    return authConfig;
  });
};
