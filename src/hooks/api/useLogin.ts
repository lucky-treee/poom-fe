import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { LoginResponse } from 'models/auth/response';
import { login } from 'service/auth';

type UseLoginOptions = Pick<UseQueryOptions<LoginResponse, Error>, 'onSuccess'>;

const useLogin = ({ onSuccess }: UseLoginOptions) => {
  return useQuery(['login'], () => login(), {
    onSuccess,
  });
};

export default useLogin;
