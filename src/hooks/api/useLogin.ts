import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { login } from 'service/auth';

type UseLoginOptions = Pick<UseQueryOptions, 'onSuccess' | 'onError'>;

const useLogin = (userCode: string | null, options?: UseLoginOptions) =>
  useQuery(['login', userCode], () => login(userCode ?? ''), {
    enabled: userCode !== null,
    ...options,
  });

export default useLogin;
