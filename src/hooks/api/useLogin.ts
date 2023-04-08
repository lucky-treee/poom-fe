import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { LoginResponse } from 'models/auth/response';
import { login } from 'service/auth';

type UseLoginOptions = Pick<
  UseQueryOptions<LoginResponse, Error>,
  'onSuccess' | 'onError'
>;

const useLogin = ({ onSuccess, onError }: UseLoginOptions) => {
  return useQuery(['login'], () => login(), {
    onSuccess,
    onError,
  });
};

export default useLogin;
