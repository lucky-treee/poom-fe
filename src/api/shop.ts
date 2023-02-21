import client from 'api';
import { ShopResponse } from 'models/response';

export const fetchShopList = (
  maxLat: number,
  minLat: number,
  maxLng: number,
  minLng: number
) => {
  return client.get<ShopResponse>(
    `/shop/get/${maxLat}/${minLat}/${maxLng}/${minLng}`
  );
};
