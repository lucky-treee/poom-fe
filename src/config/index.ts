const isLocalEnv = import.meta.env.DEV;

const shopApiHost = 'https://poom-shop.c0dewave.com';

const authApiHost = 'https://poom-member.c0dewave.com';

const config = {
  shopApiHost: isLocalEnv ? '/api/shop' : shopApiHost,
  authApiHost: isLocalEnv ? '/api/auth' : authApiHost,
};

export default config;
