import KakaoPath, { redirectUri } from 'constants/KakaoPath';
import { LoginFrom } from 'models/auth/LoginFrom';

const useQueryKakaoLogin = () => {
  const token = import.meta.env.VITE_KAKAO_API_KEY;

  const queryKakaoLogin = (from: LoginFrom) => {
    window.location.href = `${KakaoPath.AUTH}?client_id=${token}&redirect_uri=${redirectUri}&response_type=code&state=${from}`;
  };

  return queryKakaoLogin;
};

export default useQueryKakaoLogin;
