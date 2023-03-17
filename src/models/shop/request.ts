type ShopOperationTime = {
  hour: 0;
  minute: 0;
  second: 0;
  nano: 0;
};

export type ShopCategory = 'REFILL' | 'NECESSITIES' | 'ETC';

export type ShopRegisterRequest = {
  shopName: string;
  address: string;
  lat: number;
  lng: number;
  category?: ShopCategory;
  photo?: string;
  contact?: string;
  homepage?: string;
  flagshipProduct?: string;
  sns?: string;
  operatingStart?: ShopOperationTime;
  operatingEnd?: ShopOperationTime;
  holiday?: string;
};
