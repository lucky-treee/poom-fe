import React from 'react';
import { ReactComponent as BackIcon } from 'assets/components/navigate/back.svg';
import ShopRegisterForm from 'components/ShopRegisterForm';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const ShopRegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="flex flex-col px-6 py-6 h-screen gap-6">
      <button
        type="button"
        className="flex flex-row gap-1 items-center w-fit"
        onClick={() => navigate(-1)}
      >
        <BackIcon />
      </button>
      <div className="flex flex-col gap-4">
        <Typography type="title">{t('register-shop-page-title')}</Typography>
        <Typography type="body">
          {t('register-shop-page-description')}
        </Typography>
      </div>
      <ShopRegisterForm />
    </div>
  );
};

export default ShopRegisterPage;
