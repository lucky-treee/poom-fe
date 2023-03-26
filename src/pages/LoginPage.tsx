import React from 'react';
import Terms from 'constants/Terms';
import { ReactComponent as PoomLogo } from 'assets/app/poom.svg';
import KakaoLoginImage from 'assets/auth/kakaoLoginMedium.png';
import { ReactComponent as BackIcon } from 'assets/components/navigate/back.svg';
import Typography from 'components/Typography';
import useQueryKakaoLogin from 'hooks/useQueryKakaoLogin';
import useRedirectPath from 'hooks/useRedirectPath';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const searchParams = new URLSearchParams(document.location.search);

  const redirect = searchParams.get('redirect_to') ?? '';

  const { setRedirectPath } = useRedirectPath();

  setRedirectPath(redirect);

  const queryKakaoLogin = useQueryKakaoLogin();

  const handleLoginButtonClick = () => queryKakaoLogin();

  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <div className="flex relative justify-center items-center flex-col p-12 h-screen">
      <button
        type="button"
        className="flex flex-row gap-1 items-center absolute top-8 left-8"
        onClick={() => navigate(-1)}
      >
        <BackIcon />
      </button>
      <div className="flex justify-between items-center flex-col h-[360px]">
        <PoomLogo />
        <div className="flex justify-between items-center flex-col gap-16">
          <Typography type="body">{t('login-page-describe')}</Typography>
          <button type="button" onClick={handleLoginButtonClick}>
            <img src={KakaoLoginImage} alt="카카오 로그인" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-6">
        <div className="flex justify-center items-center flex-row gap-2 mb-1">
          <a
            className="text-xs underline text-gray-500 visited:text-gray-500"
            href={Terms.termOfUse}
          >
            {t('term-of-use')}
          </a>
          <div className="w-[1px] h-2 bg-gray-500" />
          <a
            className="text-xs underline text-gray-500 visited:text-gray-500"
            href={Terms.privacyPolicy}
          >
            {t('privacy-policy')}
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Typography type="caption" className="text-gray-500">
            {t('login-page-footer')}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
