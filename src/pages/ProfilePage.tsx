import React from 'react';
import PathName from 'constants/PathName';
import Navigator from 'components/Navigator';
import Profile from 'components/profile/Profile';
import SectionButton from 'components/profile/SectionButton';
import Typography from 'components/Typography';
import { useGetUserInformation } from 'hooks/api/useGetUserInformation';
import LoginAlertProfile from 'models/auth/LoginAlertProfile';
import { useTranslation } from 'react-i18next';

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();

  const { data: userInformation } = useGetUserInformation();

  const isLogin = Boolean(userInformation);

  return (
    <div className="w-screen h-screen">
      <Typography className="px-6 py-4" type="title">
        {t('my-page-header')}
      </Typography>
      {userInformation ? (
        <Profile className="px-6 py-4" userInformation={userInformation} />
      ) : (
        <LoginAlertProfile className="px-6 py-8" />
      )}
      <SectionButton
        disabled={isLogin}
        className="border-t border-gray-200"
        text={t('favorite-section-title')}
        to={PathName.FAVORITE_MANGE_PAGE}
      />
      <SectionButton
        disabled={isLogin}
        className="border-t border-b border-gray-200"
        text={t('review-section-title')}
        to={PathName.REVIEW_MANGE_PAGE}
      />
      <Navigator menu="profile" />
    </div>
  );
};

export default ProfilePage;
