import { useMutation } from '@tanstack/react-query';
import { ReviewRegisterForm } from 'models/review/ReviewRegisterForm';
import { registerReview } from 'service/shop';

const useRegisterReview = (shopId: number) => {
  return useMutation({
    mutationFn: ({ content, images }: ReviewRegisterForm) => {
      return registerReview({ content, images, shopId });
    },
  });
};

export default useRegisterReview;
