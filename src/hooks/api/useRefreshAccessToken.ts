import { useQuery } from '@tanstack/react-query';
import { refreshAccessToken } from 'service/auth';
import { setSessionItem } from 'utils/SessionStorage';

const useRefreshAccessToken = () => {
  return useQuery({
    queryKey: ['refreshToken'],
    queryFn: async () => {
      const { accessToken } = await refreshAccessToken();

      setSessionItem('ACCESS_TOKEN', accessToken);

      return accessToken;
    },
  });
};

export default useRefreshAccessToken;
