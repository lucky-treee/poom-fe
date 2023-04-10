type AvailableStorageKey = 'ACCESS_TOKEN';

export const getSessionItem = <T>(key: AvailableStorageKey): T | undefined => {
  const sessionValue = sessionStorage.getItem(key);

  if (!sessionValue) {
    return undefined;
  }

  try {
    return JSON.parse(sessionValue) as T;
  } catch {
    return sessionValue as T;
  }
};

export const setSessionItem = <T>(key: AvailableStorageKey, value: T) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    sessionStorage.setItem(key, String(value));
  }
};
