import React from 'react';
import Typography from 'components/base/Typography';
import { useTranslation } from 'react-i18next';

interface NotMemberErrorPageProps {
  email: string;
  onGoToSignUpPageButtonClick: (email: string) => void;
}

const NotMemberErrorPage: React.FC<NotMemberErrorPageProps> = (props) => {
  const { email, onGoToSignUpPageButtonClick } = props;

  const { t } = useTranslation();

  const handleGoToSignUpPageButtonClick = () => {
    onGoToSignUpPageButtonClick(email);
  };

  return (
    <div className="flex justify-between items-center flex-col pt-12 pl-12 pr-12 pb-12 min-h-screen">
      <div className="flex w-full flex-col gap-3">
        <Typography type="title">{t('need-sign-up-title')}</Typography>
        <Typography type="body">{t('need-sign-up-message')}</Typography>
      </div>
      <button
        className="mt-6 px-6 py-2 rounded-md bg-primary hover:pg-primary-hover text-white w-fit"
        type="button"
        onClick={handleGoToSignUpPageButtonClick}
      >
        {t('go-to-sign-up-page-button-text')}
      </button>
    </div>
  );
};

export default NotMemberErrorPage;
