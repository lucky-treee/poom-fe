import { useQuery } from '@tanstack/react-query';
import { getShopById } from 'service/shop';

export const useGetShopById = (id: number) => {
  return useQuery({
    queryKey: ['shop', id],
    queryFn: async () => {
      const { data } = await getShopById(id);

      return data;
    },
  });
};
