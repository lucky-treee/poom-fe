import { Coordinate, getShopByCoordinate } from 'api/shop';
import { useQuery } from 'react-query';

export const useGetShopByCoordinate = (coordinate: Coordinate) => {
  const { data } = useQuery({
    queryKey: ['shop', coordinate],
    queryFn: () => getShopByCoordinate(coordinate),
  });

  return { data };
};
