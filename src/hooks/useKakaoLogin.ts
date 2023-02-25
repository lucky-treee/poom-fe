import KakaoPath from 'constants/KakaoPath';
import PathName from 'constants/PathName';
import { LoginFrom } from 'models/auth/LoginFrom';

const useKakaoLogin = () => {
  const token = import.meta.env.VITE_KAKAO_API_KEY;
  const redirectUri = window.location.origin + PathName.AUTH_PAGE;

  const queryKakaoLogin = (from: LoginFrom) => {
    window.location.href = `${KakaoPath.AUTH}?client_id=${token}&redirect_uri=${redirectUri}&response_type=code&state=${from}`;
  };

  return queryKakaoLogin;
};

export default useKakaoLogin;
