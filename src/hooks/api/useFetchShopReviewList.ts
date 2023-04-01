import { useQuery } from '@tanstack/react-query';
import { ReviewList } from 'models/auth/Review';
import { fetchShopReviewList } from 'service/shop';

export const useFetchShopReviewList = (id: number) => {
  return useQuery<ReviewList, Error>({
    queryKey: ['fetchShopReviewList', id],
    queryFn: async () => {
      const { reviewList } = await fetchShopReviewList(id);

      return reviewList;
    },
  });
};
