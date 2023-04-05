import { useQuery } from '@tanstack/react-query';
import { ShopReviewList } from 'models/review';
import { fetchShopReviewList } from 'service/shop';

export const useFetchShopReviewList = (id: number) => {
  return useQuery<ShopReviewList, Error>({
    queryKey: ['fetchedShopReviewList', id],
    queryFn: async () => {
      const { reviewList } = await fetchShopReviewList(id);

      return reviewList;
    },
  });
};
