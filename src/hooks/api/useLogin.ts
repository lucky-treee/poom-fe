import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { login } from 'service/auth';

type UseLoginOptions = Pick<UseQueryOptions, 'onSuccess' | 'onError'>;

const useLogin = (options?: UseLoginOptions) =>
  useQuery(['login'], () => login(), {
    ...options,
  });

export default useLogin;
