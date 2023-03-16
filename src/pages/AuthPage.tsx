import React from 'react';
import PathName from 'constants/PathName';
import LoadingProgressIcon from 'components/LoadingProgressIcon';
import Typography from 'components/Typography';
import useLogin from 'hooks/api/useLogin';
import { LoginFrom } from 'models/auth/LoginFrom';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate } from 'react-router';

const AuthPage: React.FC = () => {
  const searchParams = new URLSearchParams(document.location.search);

  const code = searchParams.get('code');

  const from = searchParams.get('state') as LoginFrom;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { isLoading, isError, error } = useLogin(code, {
    onSuccess: () => {
      switch (from) {
        case 'review':
          navigate(PathName.MAP_PAGE);
          break;
        case 'profile':
          navigate(PathName.PROFILE_PAGE);
          break;
        case 'signUp':
          navigate(PathName.SIGNUP_PAGE);
          break;
        default:
          navigate(PathName.PROFILE_PAGE);
          break;
      }
    },
  });

  const handleBackToLoginButtonClick = () =>
    navigate(generatePath(PathName.LOGIN_PAGE, { from }));

  if (!code) {
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
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center flex-col pt-12 pl-12 pr-12 pb-12 h-screen">
        <LoadingProgressIcon className="fill-primary" />
      </div>
    );
  }

  if (isError) {
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
  }

  return (
    <div className="flex justify-center items-center flex-col pt-12 pl-12 pr-12 pb-12 h-screen">
      <Typography type="body">{t('login-success-message')}</Typography>
    </div>
  );
};

export default AuthPage;
