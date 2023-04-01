import { redirectUri } from 'constants/KakaoPath';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { KakaoLoginResponse } from 'models/auth/response';
import { kakaoLogin } from 'service/auth';

type UseLoginOptions = Pick<
  UseQueryOptions<KakaoLoginResponse, Error>,
  'onSuccess'
>;

const useKakaoLogin = (userCode: string, options?: UseLoginOptions) =>
  useQuery(
    ['kakaoLogin', userCode],
    async () => {
      const accessToken = await kakaoLogin({
        code: userCode,
        redirect_uri: redirectUri,
      });

      return accessToken;
    },
    {
      enabled: Boolean(userCode),
      ...options,
    }
  );

export default useKakaoLogin;
