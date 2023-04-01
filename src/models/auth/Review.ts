export type Review = {
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

export type ReviewList = Review[];
