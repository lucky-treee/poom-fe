import KakaoPath, { redirectUri } from 'constants/KakaoPath';

const useQueryKakaoLogin = () => {
  const token = import.meta.env.VITE_KAKAO_API_KEY;

  const queryKakaoLogin = () => {
    window.location.href = `${KakaoPath.AUTH}?client_id=${token}&redirect_uri=${redirectUri}&response_type=code`;
  };

  return queryKakaoLogin;
};

export default useQueryKakaoLogin;
