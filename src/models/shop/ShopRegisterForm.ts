import { ShopCategory } from 'models/shop/request';

export type ShopRegisterForm = {
  name: string;
  address: string;
  lng: number;
  lat: number;
  category: ShopCategory;
};
