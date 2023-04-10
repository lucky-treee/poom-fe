import { setSessionItem } from 'utils/sessionStorage';

const useAccessToken = () => {
  const setAccessToken = (token: string) =>
    setSessionItem('ACCESS_TOKEN', token);

  return setAccessToken;
};

export default useAccessToken;
