import { ReviewRegisterForm } from 'models/review/ReviewRegisterForm';

export type RegisterReviewRequest = {
  images: File[];
  memberId: number;
  shopId: number;
} & ReviewRegisterForm;
