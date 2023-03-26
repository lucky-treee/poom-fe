import { setAuthServiceToken } from 'service';

const useAccessToken = () => {
  const setAccessToken = (token: string) => setAuthServiceToken(token);

  return setAccessToken;
};

export default useAccessToken;
