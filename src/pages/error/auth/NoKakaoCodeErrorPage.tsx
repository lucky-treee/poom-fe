import React from 'react';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';

interface NoKakaoCodeErrorPageProps {
  onBackToLoginButtonClick: () => void;
}

const NoKakaoCodeErrorPage: React.FC<NoKakaoCodeErrorPageProps> = (props) => {
  const { onBackToLoginButtonClick } = props;

  const { t } = useTranslation();

  const handleBackToLoginButtonClick = () => onBackToLoginButtonClick();

  return (
    <div className="flex justify-between items-center flex-col pt-12 pl-12 pr-12 pb-12 h-screen">
      <div className="flex flex-col gap-3">
        <Typography type="title">{t('authenticate-fail-title')}</Typography>
        <Typography type="body">
          {t('authenticate-fail-message-no-kakao-code')}
        </Typography>
      </div>
      <button
        className="px-6 py-2 rounded-md bg-primary hover:pg-primary-hover text-white w-fit"
        type="button"
        onClick={handleBackToLoginButtonClick}
      >
        {t('back-to-login-button-text')}
      </button>
    </div>
  );
};

export default NoKakaoCodeErrorPage;
