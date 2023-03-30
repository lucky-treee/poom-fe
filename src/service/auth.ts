import { AxiosResponse } from 'axios';
import { KakaoLoginRequest, SignUpRequest } from 'models/auth/request';
import {
  KakaoLoginResponse,
  LoginResponse,
  FetchProfileResponse,
  SignUpResponse,
  FetchBookmarkListResponse,
  FetchUserReviewListResponse,
} from 'models/auth/response';
import { SignUpForm } from 'models/auth/SignUpForm';
import { AuthService } from 'service';

export const login = async () => {
  const { data } = await AuthService.post<LoginResponse>('/v1/auth/login');

  return data;
};

export const kakaoLogin = async (kakaoLoginRequest: KakaoLoginRequest) => {
  const { data } = await AuthService.post<
    KakaoLoginResponse,
    AxiosResponse<KakaoLoginResponse>,
    KakaoLoginRequest
  >('/v1/auth/login/kakao', kakaoLoginRequest);

  return data;
};

export const fetchProfile = async () => {
  const { data } = await AuthService.get<FetchProfileResponse>('/v1/members');

  return data;
};

export const signUp = async (formValue: SignUpForm) => {
  const { data } = await AuthService.post<
    SignUpResponse,
    AxiosResponse<SignUpResponse>,
    SignUpRequest
  >('/v1/auth/signup', {
    ...formValue,
  });

  return data;
};

export const fetchBookmarkList = async () => {
  const { data } = await AuthService.get<FetchBookmarkListResponse>(
    '/v1/bookmarks'
  );

  return data;
};

export const fetchUserReviewList = async () => {
  const { data } = await AuthService.get<FetchUserReviewListResponse>(
    '/v1/reviews'
  );

  return data;
};
