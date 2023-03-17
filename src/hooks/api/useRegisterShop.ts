import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ShopRegisterForm } from 'models/shop/ShopRegisterForm';
import { registerShop } from 'service/shop';

type UseRegisterShopOptions = UseMutationOptions<
  unknown,
  unknown,
  ShopRegisterForm
>;

export const useRegisterShop = (options?: UseRegisterShopOptions) => {
  return useMutation({
    mutationFn: ({ name, address, lng, lat, category }: ShopRegisterForm) =>
      registerShop({
        shopName: name,
        address,
        lng,
        lat,
        category,
      }),
    ...options,
  });
};
