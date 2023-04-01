import useLocalStorage from 'hooks/useLocalStorage';

const useRedirectPath = () => {
  const { getItem, setItem } = useLocalStorage<string>('redirectPath', '');

  const getRedirectPath = () => {
    const redirectPath = getItem();

    return redirectPath;
  };

  const setRedirectPath = (path: string) => {
    setItem(path);
  };

  return { getRedirectPath, setRedirectPath };
};

export default useRedirectPath;
