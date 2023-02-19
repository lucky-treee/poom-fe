import client from 'api';
import { LatitudeType, LongitudeType } from 'models/Location';

export interface Coordinate {
  latitude: LatitudeType;
  longitude: LongitudeType;
}

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

export const getShopByCoordinate = (coordinate: Coordinate) => {
  const { latitude, longitude } = coordinate;
  const { maxLat, minLat } = latitude;
  const { maxLng, minLng } = longitude;

  return client().get<ShopResponse>(
    `/shop/get/${maxLat}/${minLat}/${maxLng}/${minLng}`
  );
};
