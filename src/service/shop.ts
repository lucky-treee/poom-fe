import { ShopResponse } from 'models/shop/response';
import { ShopService } from 'service';

export const fetchShopList = (
  maxLat: number,
  minLat: number,
  maxLng: number,
  minLng: number
) => {
  return ShopService.get<ShopResponse>('/v1/shop/get', {
    params: {
      maxLat,
      minLat,
      maxLng,
      minLng,
    },
  });
};
