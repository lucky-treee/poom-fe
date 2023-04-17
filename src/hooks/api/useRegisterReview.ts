import { useMutation } from '@tanstack/react-query';
import { ReviewRegisterForm } from 'models/review/ReviewRegisterForm';
import { registerReview } from 'service/shop';

const useRegisterReview = (shopId: number) => {
  return useMutation({
    mutationKey: ['registerReview', shopId],
    mutationFn: ({ content, images }: ReviewRegisterForm) => {
      return registerReview(shopId, { content, images });
    },
  });
};

export default useRegisterReview;
