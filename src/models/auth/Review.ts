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

export type ReviewList = Review[];
