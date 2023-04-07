import React from 'react';
import Typography from 'components/base/Typography';
import { useTranslation } from 'react-i18next';

interface LoginFailErrorPageProps {
  error: Error;
  onBackToLoginButtonClick: () => void;
}

const LoginFailErrorPage: React.FC<LoginFailErrorPageProps> = (props) => {
  const { error, onBackToLoginButtonClick } = props;

  const { t } = useTranslation();

  const handleBackToLoginButtonClick = () => onBackToLoginButtonClick();

  return (
    <div className="flex justify-between items-center flex-col pt-12 pl-12 pr-12 pb-12 min-h-screen">
      <div className="flex w-full flex-col gap-3">
        <Typography type="title">{t('authenticate-fail-title')}</Typography>
        <Typography type="body">
          {t('authenticate-fail-message-server-error')}
        </Typography>
        <code className="font-mono w-full break-words">
          {JSON.stringify(error)}
        </code>
      </div>
      <button
        className="mt-6 px-6 py-2 rounded-md bg-primary hover:pg-primary-hover text-white w-fit"
        type="button"
        onClick={handleBackToLoginButtonClick}
      >
        {t('back-to-login-button-text')}
      </button>
    </div>
  );
};

export default LoginFailErrorPage;
