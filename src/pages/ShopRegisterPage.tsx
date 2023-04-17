import React from 'react';
import PathName from 'constants/PathName';
import { ReactComponent as BackIcon } from 'assets/components/navigate/Back.svg';
import Typography from 'components/base/Typography';
import ShopRegisterForm from 'components/ShopRegisterForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const ShopRegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleBackButtonClick = () => navigate(PathName.MAP_PAGE);

  return (
    <div className="flex flex-col px-6 py-6 h-screen gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-4">
          <button
            type="button"
            className="flex flex-row gap-1 items-center w-fit"
            onClick={handleBackButtonClick}
          >
            <BackIcon />
          </button>
          <Typography type="title">{t('register-shop-page-title')}</Typography>
        </div>
        <Typography type="body" className="text-gray-500">
          {t('register-shop-page-description')}
        </Typography>
      </div>
      <ShopRegisterForm />
    </div>
  );
};

export default ShopRegisterPage;
