import axios from 'axios';
import config from 'config';

const createService = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

export const ShopService = createService(config.shopApiHost);

export const AuthService = createService(config.authApiHost);
