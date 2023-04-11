import { useMutation } from '@tanstack/react-query';
import { RegisterReviewRequest } from 'models/review/request';
import { registerReview } from 'service/shop';

const useRegisterReview = () => {
  return useMutation({
    mutationFn: (registerReviewRequest: RegisterReviewRequest) => {
      const { content, shopId, images } = registerReviewRequest;

      const formData = new FormData();

      formData.append('content', content);
      formData.append('shopId', shopId.toString());
      images.forEach((image) => formData.append('images', image));

      return registerReview(formData);
    },
  });
};

export default useRegisterReview;
