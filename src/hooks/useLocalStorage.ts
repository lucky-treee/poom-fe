import { useEffect } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const getItem = (): T | null => {
    const item = localStorage.getItem(key);

    try {
      return item ? JSON.parse(item) : null;
    } catch {
      return item as T;
    }
  };

  const setItem = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(() => {
    const item = getItem();

    const isInitialized = Boolean(item);

    if (!isInitialized) {
      setItem(initialValue);
    }
  }, [initialValue]);

  return { getItem, setItem };
};

export default useLocalStorage;
