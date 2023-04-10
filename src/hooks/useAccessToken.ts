import { setSessionItem } from 'utils/SessionStorage';

const useAccessToken = () => {
  const setAccessToken = (token: string) =>
    setSessionItem('ACCESS_TOKEN', token);

  return setAccessToken;
};

export default useAccessToken;
