import { LogInResponse, ProfileResponse } from 'models/auth/response';
import { AuthService } from 'service';

export const login = (code: string) => {
  return AuthService.get<LogInResponse>('/auth/login', { params: { code } });
};

export const fetchProfile = () => {
  return AuthService.get<ProfileResponse>('/auth/profile');
};
