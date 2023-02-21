import { ShopType } from 'models/shop';

export type ShopResponse = {
  status: number;
  code: number;
  message: string;
  result: ShopType[];
};
