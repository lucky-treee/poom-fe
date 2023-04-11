import { ReviewRegisterForm } from 'models/review/ReviewRegisterForm';

export type RegisterReviewRequest = {
  images: File[];
  shopId: number;
} & ReviewRegisterForm;
