import { ShopType } from 'models/Shop';

export type ShopResponse = {
  status: number;
  code: number;
  message: string;
  result: ShopType[];
};
