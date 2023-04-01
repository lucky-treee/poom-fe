import { ShopReview } from 'models/auth/Review';
import { Shop } from 'models/shop/Shop';

export type ShopResponse = Shop[];

export type ShopReviewListResponse = {
  reviewList: ShopReview[];
};
