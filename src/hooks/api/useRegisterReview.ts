import { useMutation } from '@tanstack/react-query';
import { registerReview } from 'service/shop';
import { ReviewRegisterForm } from 'models/review/ReviewRegisterForm';

const useRegisterReview = (shopId: number) => {
  return useMutation({
    mutationFn: ({ content, images }: ReviewRegisterForm) => {
      return registerReview({ content, images, shopId });
    },
  });
};

export default useRegisterReview;
