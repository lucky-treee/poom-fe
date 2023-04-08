import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { RegisterReviewRequest } from 'models/review/request';
import { registerReview } from 'service/shop';

const useRegisterReview = () => {
  return useMutation({
    mutationFn: (registerReviewRequest: RegisterReviewRequest) =>
      registerReview(registerReviewRequest),
  });
};

export default useRegisterReview;
