import { KakaoLoginRequest, SignUpRequest } from 'models/auth/request';
import {
  KakaoLoginResponse,
  FetchProfileResponse,
  SignUpResponse,
  FetchBookmarkListResponse,
  FetchUserReviewListResponse,
  RefreshAccessTokenResponse,
} from 'models/auth/response';
import { SignUpForm } from 'models/auth/SignUpForm';
import { AuthService } from 'service';

export const kakaoLogin = async (kakaoLoginRequest: KakaoLoginRequest) => {
  const data = await AuthService.post<KakaoLoginRequest, KakaoLoginResponse>(
    '/v1/auth/login/kakao',
    kakaoLoginRequest
  );

  return data;
};

export const fetchProfile = async () => {
  const data = await AuthService.get<FetchProfileResponse>('/v1/members', {
    withCredentials: true,
  });

  return data;
};

export const signUp = async (formValue: SignUpForm) => {
  const data = await AuthService.post<SignUpRequest, SignUpResponse>(
    '/v1/auth/signup',
    {
      ...formValue,
    }
  );

  return data;
};

export const fetchBookmarkList = async () => {
  const data = await AuthService.get<FetchBookmarkListResponse>(
    '/v1/bookmarks',
    {
      withCredentials: true,
    }
  );

  return data;
};

export const fetchUserReviewList = async () => {
  const data = await AuthService.get<FetchUserReviewListResponse>(
    '/v1/reviews',
    {
      withCredentials: true,
    }
  );

  return data;
};

export const refreshAccessToken = async () => {
  const data = await AuthService.post<unknown, RefreshAccessTokenResponse>(
    '/v1/auth/token',
    undefined,
    {
      withCredentials: true,
    }
  );

  return data;
};
