import React from 'react';
import PathName from 'constants/PathName';
import Button from 'components/Button';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SignUpSuccessPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between p-12 w-screen h-screen">
      <div className="flex flex-col gap-4">
        <Typography type="title">{t('sign-up-success-title')}</Typography>
        <Typography type="body">{t('sign-up-success-description')}</Typography>
      </div>
      <Button type="main">
        <Link to={PathName.MAP_PAGE}>{t('back-to-home-button-text')}</Link>
      </Button>
    </div>
  );
};

export default SignUpSuccessPage;
