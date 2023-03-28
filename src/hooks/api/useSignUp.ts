import { useMutation, UseQueryOptions } from '@tanstack/react-query';
import { SignUpResponse } from 'models/auth/response';
import { SignUpForm } from 'models/auth/SignUpForm';
import { signUp } from 'service/auth';

type UseSignUpOptions = Pick<
  UseQueryOptions<SignUpResponse, Error>,
  'onSuccess'
>;

const useSignUp = ({ onSuccess }: UseSignUpOptions) => {
  return useMutation({
    mutationFn: (formValue: SignUpForm) => signUp(formValue),
    onSuccess,
  });
};

export default useSignUp;
