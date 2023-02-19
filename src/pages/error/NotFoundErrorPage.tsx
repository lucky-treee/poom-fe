import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import Typography from 'components/Typography';
import PathName from 'constants/PathName';

const NotFoundErrorPage: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleBackToHomeButtonClick = () => navigate(PathName.MAP_PAGE);

  return (
    <div className="flex justify-between items-center flex-col pt-12 pl-12 pr-12 pb-12 h-screen">
      <div className="flex gap-2 flex-col w-full">
        <Typography type="title">{t('not-found-error-page-title')}</Typography>
        <Typography type="body">
          {t('not-found-error-page-description')}
        </Typography>
      </div>
      <button
        className="px-6 py-2 rounded-md bg-primary hover:pg-primary-hover text-white w-fit"
        type="button"
        onClick={handleBackToHomeButtonClick}
      >
        {t('back-to-home-button-text')}
      </button>
    </div>
  );
};

export default NotFoundErrorPage;
