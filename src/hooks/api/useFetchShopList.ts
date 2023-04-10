import { useQuery } from '@tanstack/react-query';
import { fetchShopList } from 'service/shop';

const useFetchShopList = (
  maxLat: number,
  minLat: number,
  maxLng: number,
  minLng: number
) => {
  return useQuery({
    queryKey: ['shopList', maxLat, minLat, maxLng, minLng],
    queryFn: async () => {
      const data = await fetchShopList(maxLat, minLat, maxLng, minLng);

      return data;
    },
  });
};

export default useFetchShopList;
