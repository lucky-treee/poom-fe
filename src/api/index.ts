import axios from 'axios';

const client = () => {
  const instance = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};

export default client();
