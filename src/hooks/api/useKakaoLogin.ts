import { redirectUri } from 'constants/KakaoPath';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { kakaoLogin } from 'service/auth';

type UseLoginOptions = Pick<UseQueryOptions, 'onSuccess' | 'onError'>;

const useKakaoLogin = (userCode: string, options?: UseLoginOptions) =>
  useQuery(['kakaoLogin', userCode], () => kakaoLogin(userCode, redirectUri), {
    enabled: Boolean(userCode),
    ...options,
  });

export default useKakaoLogin;
