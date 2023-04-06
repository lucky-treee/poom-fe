import React, { useState } from 'react';
import { ReactComponent as LocateIcon } from 'assets/map/SmallLocate.svg';
import Button from 'components/base/Button';
import Input from 'components/base/Input';
import Select from 'components/base/Select';
import Typography from 'components/base/Typography';
import MapInput from 'components/MapInput';
import { useRegisterShop } from 'hooks/api/useRegisterShop';
import { ShopRegisterForm as ShopRegisterFormValue } from 'models/shop/ShopRegisterForm';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const ShopRegisterForm: React.FC = () => {
  const { t } = useTranslation();

  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleMapOpen = () => setIsMapOpen(true);

  const handleMapClose = () => setIsMapOpen(false);

  const { mutate: registerShop, isLoading } = useRegisterShop();

  const methods = useForm<ShopRegisterFormValue>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      address: '',
      category: 'ETC',
      lat: 0,
      lng: 0,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (formValue: ShopRegisterFormValue) => {
    registerShop(formValue);
  };

  return (
    <FormProvider {...methods}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-2 h-full"
      >
        <div className="flex flex-col gap-2 h-full">
          <div className="flex flex-col gap-1">
            <Typography type="subtitle">{t('shop-name')}</Typography>
            <Input
              required={{
                value: true,
                message: t('error-shop-name-required-text'),
              }}
              name="name"
              placeholder={t('shop-name-placeholder')}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div
              className="flex flex-row justify-between"
              onClick={handleMapOpen}
            >
              <Typography type="subtitle">{t('shop-address')}</Typography>
              <div className="flex flex-row gap-1 justify-center items-center">
                <LocateIcon />
                <Typography type="caption" className="text-sky-500 underline">
                  {t('search-from-map')}
                </Typography>
              </div>
            </div>
            <Input
              required={{
                value: true,
                message: t('shop-address-placeholder'),
              }}
              name="address"
              placeholder={t('error-shop-address-required-text')}
            />
            <Typography type="subtitle">{t('shop-category')}</Typography>
            <Select
              name="category"
              defaultValue="ETC"
              options={['리필샾', '생필품', '기타']}
              values={['REFILL', 'NECESSITIES', 'ETC']}
              required={{
                value: true,
                message: t('error-shop-category-required-text'),
              }}
            />
          </div>
        </div>
        <Button isLoading={isLoading} type="submit" variant="main">
          {t('register-shop-button-text')}
        </Button>
        <MapInput open={isMapOpen} onClose={handleMapClose} />
      </form>
    </FormProvider>
  );
};

export default ShopRegisterForm;
