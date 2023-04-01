export type SignUpRequest = {
  photo: string;
  nickname: string;
  email: string;
};

export type KakaoLoginRequest = {
  code: string;
  redirect_uri: string;
};
