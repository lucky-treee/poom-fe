import { useQuery } from '@tanstack/react-query';
import { ReviewList } from 'models/auth/Review';
import { fetchUserReviewList } from 'service/auth';

const useFetchUserReviewList = () => {
  return useQuery<ReviewList, Error>({
    queryKey: ['fetchUserReviewList'],
    queryFn: async (): Promise<ReviewList> => {
      const { reviewList } = await fetchUserReviewList();

      return reviewList;
    },
  });
};

export default useFetchUserReviewList;
