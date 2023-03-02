import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { SignUpForm } from 'models/auth/SignUpForm';
import { signUp } from 'service/auth';

type UseSignUpOptions = UseMutationOptions<unknown, unknown, SignUpForm>;

const useSignUp = (options?: UseSignUpOptions) => {
  return useMutation({
    mutationFn: (formValue: SignUpForm) => signUp(formValue),
    ...options,
  });
};

export default useSignUp;
