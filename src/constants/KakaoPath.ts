import PathName from 'constants/PathName';

const Kakao = {
  AUTH: 'https://kauth.kakao.com/oauth/authorize',
};

export const redirectUri = window.location.origin + PathName.AUTH_PAGE;

export default Kakao;
