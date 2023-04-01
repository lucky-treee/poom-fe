import { useQuery } from '@tanstack/react-query';
import { ShopReviewListResponse } from 'models/auth/response';
import { fetchShopReviewList } from 'service/shop';

export const useFetchShopReviewList = (id: number) => {
  return useQuery<ShopReviewListResponse, Error>({
    queryKey: ['fetchShopReviewList', id],
    queryFn: async () => {
      const { reviewList } = await fetchShopReviewList(id);

      return reviewList;
    },
  });
};
