import { SignUpRequest } from 'models/auth/request';
import { LogInResponse, ProfileResponse } from 'models/auth/response';
import { SignUpForm } from 'models/auth/SignUpForm';
import { AuthService } from 'service';

export const login = (code: string) => {
  return AuthService.get<LogInResponse>('/auth/login', {
    params: { code },
  });
};

export const fetchProfile = () => {
  return AuthService.get<ProfileResponse>('/auth/profile');
};

export const signUp = (formValue: SignUpForm) => {
  return AuthService.post<SignUpRequest>('/auth/signup', { ...formValue });
};
