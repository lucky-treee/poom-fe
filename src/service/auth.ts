import { LogInResponse } from 'models/auth/response';
import { AuthService } from 'service';

export const login = (code: string) => {
  return AuthService.get<LogInResponse>('/auth/login', { params: { code } });
};
