export type Review = {
  id: number;
  shop: {
    name: string;
    category: string;
  };
  content: string;
  imgSrc: string[];
  updatedAt: number;
};

export type ShopReview = {
  profile: {
    nickname: string;
    profileImageSrc: string;
  };
} & Review;

export type ReviewList = Review[];
export type ShopReviewList = ShopReview[];
