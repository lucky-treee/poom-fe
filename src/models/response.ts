import { Shop } from 'models/shop/Shop';

export type ShopResponse = {
  status: number;
  code: number;
  message: string;
  result: Shop[];
};
