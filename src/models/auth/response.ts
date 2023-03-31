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
