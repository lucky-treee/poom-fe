import React from 'react';
import PathName from 'constants/PathName';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface LoginAlertProfileProps {
  className?: string;
}

const LoginAlertProfile: React.FC<LoginAlertProfileProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-col gap-2">
        <Typography type="subtitle">{t('need-login-message')}</Typography>
        <Link
          className="text-sm font-normal leading-5 text-sky-500 underline"
          to={{
            pathname: PathName.LOGIN_PAGE,
            search: `?redirect_to=${window.location.pathname}`,
          }}
        >
          {t('login-link-text')}
        </Link>
      </div>
    </div>
  );
};

export default LoginAlertProfile;
