import { useQuery } from '@tanstack/react-query';
import { fetchShopList } from 'api/shop';

export const useShopListQuery = (
  maxLat: number,
  minLat: number,
  maxLng: number,
  minLng: number
) => {
  return useQuery({
    queryKey: ['shopList', maxLat, minLat, maxLng, minLng],
    queryFn: () => fetchShopList(maxLat, minLat, maxLng, minLng),
  });
};
