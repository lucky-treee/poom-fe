import { useEffect } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { setAuthServiceToken } from 'service';

const useAccessToken = () => {
  const { getItem, setItem } = useLocalStorage<string>('accessToken', '');

  const setAccessToken = (token: string) => {
    setItem(token);

    setAuthServiceToken(token);
  };

  useEffect(() => {
    const accessToken = getItem();

    if (accessToken && accessToken !== '') {
      setAuthServiceToken(accessToken);
    }
  }, []);

  return setAccessToken;
};

export default useAccessToken;
