import React from 'react';
import PathName from 'constants/PathName';
import Typography from 'components/base/Typography';
import { useTranslation } from 'react-i18next';

interface UnknownErrorPageProps {
  error: Error;
}

const UnknownErrorPage: React.FC<UnknownErrorPageProps> = ({ error }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center flex-col pt-12 pl-12 pr-12 pb-12 h-screen gap-6">
      <div className="flex gap-2 flex-col w-full">
        <Typography type="title">{t('unknown-error-page-title')}</Typography>
        <Typography type="body">
          {t('unknown-error-page-description')}
        </Typography>
      </div>
      <div className="flex flex-col w-full h-full gap-2 overflow-auto">
        <Typography type="code">{`${t('unknown-error-occur-message')} : ${
          error.message
        }`}</Typography>
        {error.stack?.split('\n').map((errorStack) => (
          <Typography className="break-all" type="code" key={errorStack}>
            {errorStack}
          </Typography>
        ))}
      </div>
      <a href={PathName.MAP_PAGE}>
        <button
          type="button"
          className="px-6 py-2 rounded-md bg-primary hover:pg-primary-hover text-white w-fit"
        >
          {t('back-to-home-button-text')}
        </button>
      </a>
    </div>
  );
};

export default UnknownErrorPage;
