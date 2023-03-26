import React from 'react';
import PathName from 'constants/PathName';
import { AxiosError } from 'axios';
import LoadingProgressIcon from 'components/LoadingProgressIcon';
import Typography from 'components/Typography';
import useKakaoLogin from 'hooks/api/useKakaoLogin';
import useRedirectPath from 'hooks/useRedirectPath';
import LoginFailErrorPage from 'pages/error/auth/LoginFailErrorPage';
import NoKakaoCodeErrorPage from 'pages/error/auth/NoKakaoCodeErrorPage';
import NotMemberErrorPage from 'pages/error/auth/NotMemberErrorPage';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const AuthPage: React.FC = () => {
  const searchParams = new URLSearchParams(document.location.search);

  const code = searchParams.get('code') ?? '';

  const { getRedirectPath } = useRedirectPath();

  const redirectPath = getRedirectPath();

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { isLoading, isError, error } = useKakaoLogin(code, {
    onSuccess: () => {
      if (redirect) {
        navigate(redirect);
      } else {
        navigate(PathName.MAP_PAGE);
      }
    },
  });

  const handleBackToLoginButtonClick = () =>
    navigate(`${PathName.LOGIN_PAGE}?redirect_to=${redirectPath}`);

  const handleGoToSignUpPageButtonClick = (email: string) => {
    navigate(
      `${PathName.SIGNUP_PAGE}?redirect_to=${redirectPath}&email=${email}`
    );
  };

  if (!code) {
    return (
      <NoKakaoCodeErrorPage
        onBackToLoginButtonClick={handleBackToLoginButtonClick}
      />
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
    if (error instanceof AxiosError && error.response?.status === 404) {
      const email = error.response.data;

      return (
        <NotMemberErrorPage
          email={email}
          onGoToSignUpPageButtonClick={handleGoToSignUpPageButtonClick}
        />
      );
    }

    return (
      <LoginFailErrorPage
        error={error as Error}
        onBackToLoginButtonClick={handleBackToLoginButtonClick}
      />
    );
  }

  return (
    <div className="flex justify-center items-center flex-col pt-12 pl-12 pr-12 pb-12 h-screen">
      <Typography type="body">{t('login-success-message')}</Typography>
    </div>
  );
};

export default AuthPage;
