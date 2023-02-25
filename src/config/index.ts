const isLocalEnv = import.meta.env.DEV;

const shopApiHost = 'https://poom-shop.c0dewave.com';

const config = {
  shopApiHost: isLocalEnv ? '/api/shop' : shopApiHost,
};

export default config;
