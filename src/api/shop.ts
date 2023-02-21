import client from 'api';

// 아직 정보 없음
interface Shop {
  id: number;
}

interface ShopResponse {
  status: number;
  code: number;
  message: string;
  result: Shop[];
}

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
