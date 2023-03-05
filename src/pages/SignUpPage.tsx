import React from 'react';
import PathName from 'constants/PathName';
import { ReactComponent as BackIcon } from 'assets/components/navigate/back.svg';
import SignUpForm from 'components/auth/SignUpForm';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen h-screen p-8">
      <Link
        className="flex flex-row gap-1 items-center"
        to={PathName.LOGIN_PAGE}
      >
        <BackIcon />
        <Typography type="body">{t('back-to-login')}</Typography>
      </Link>
      <div className="flex flex-col mt-3 gap-2">
        <Typography type="title">{t('sign-up-page-title')}</Typography>
        <Typography type="body">{t('sign-up-description')}</Typography>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
