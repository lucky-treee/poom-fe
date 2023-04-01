export type LoginResponse = string;

export type FetchProfileResponse = {
  imageSrc: string;
  email: string;
  nickname: string;
  reviewCount: number;
  favoriteCount: number;
};

export type KakaoLoginResponse = string;

export type SignUpResponse = string;

export type HashtagOptions = 'GOOD' | 'CLEAN' | 'NICE' | 'CHEAP' | 'QUALITY';

type BookmarkResponse = {
  id: number;
  name: string;
  address: string;
  hashtag: HashtagOptions;
  category: string;
  previewImageSrc?: string;
};

export type FetchBookmarkListResponse = {
  bookmarkList: BookmarkResponse[];
};

export type FetchUserReviewListResponse = {
  reviewList: ReviewResponse[];
  pagination: {
    total: number;
    page: number;
    size: number;
  };
};

export type ShopReviewListResponse = {
  reviewList: ShopReviewListResponse[];
};

export type ShopReviewResponse = {
  id: number;
  shop: {
    name: string;
    category: string;
  };
  profile: {
    nickname: string;
    profileImageSrc: string;
  };
  content: string;
  imgSrc: string[];
  updatedAt: number;
};

export type ReviewResponse = {
  id: number;
  shop: {
    name: string;
    category: string;
  };
  content: string;
  imgSrc: string[];
  updatedAt: number;
};
