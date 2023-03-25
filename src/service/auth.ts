import { SignUpRequest } from 'models/auth/request';
import { LogInResponse, ProfileResponse } from 'models/auth/response';
import { SignUpForm } from 'models/auth/SignUpForm';
import { AuthService } from 'service';

export const login = () => {
  return AuthService.get<LogInResponse>('/v1/auth/login');
};

export const kakaoLogin = (code: string, redirect: string) => {
  return AuthService.post('/v1/auth/login/kakao', {
    code,
    redirect_uri: redirect,
  });
};

export const fetchProfile = () => {
  return AuthService.get<ProfileResponse>('/v1/members/profile');
};

export const signUp = (formValue: SignUpForm) => {
  return AuthService.post<SignUpRequest>('/v1/auth/signup', { ...formValue });
};
