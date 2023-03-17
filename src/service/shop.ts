import { ShopRegisterRequest } from 'models/shop/request';
import { ShopResponse } from 'models/shop/response';
import { ShopService } from 'service';

export const fetchShopList = (
  maxLat: number,
  minLat: number,
  maxLng: number,
  minLng: number
) => {
  return ShopService.get<ShopResponse>('/v1/shops', {
    params: {
      maxLat,
      minLat,
      maxLng,
      minLng,
    },
  });
};

export const registerShop = (shopRegisterRequest: ShopRegisterRequest) => {
  return ShopService.post('/v1/shops/shop', shopRegisterRequest);
};
