import { ShopReview } from 'models/review';
import { Shop } from 'models/shop/Shop';

export type ShopResponse = Shop[];

export type FetchShopResponse = {
  shopName: string;
  category: string;
  hashtag: string;
  shopAddress: string;
  photo: string;
  contact: string;
  homepage: string;
  flagshipProduct: string;
  sns: string;
  lat: number;
  lng: number;
  operationStart: string;
  operationEnd: string;
  holiday: string;
};

export type FetchShopReviewListResponse = {
  reviewList: ShopReview[];
};
