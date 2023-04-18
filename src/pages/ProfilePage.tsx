import React from 'react';
import PathName from 'constants/PathName';
import Typography from 'components/base/Typography';
import Navigator from 'components/Navigator';
import LoginAlertProfile from 'components/profile/LoginAlertProfile';
import Profile from 'components/profile/Profile';
import SectionButton from 'components/profile/SectionButton';
import { useGetUserInformation } from 'hooks/api/useGetUserInformation';
import { useTranslation } from 'react-i18next';

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();

  const { data: userInformation } = useGetUserInformation();

  const isLogin = Boolean(userInformation);

  return (
    <div className="w-screen h-screen">
      <Typography className="px-8 pt-8 pb-4" type="title">
        {t('my-page-header')}
      </Typography>
      {userInformation ? (
        <Profile className="px-8 py-4" userInformation={userInformation} />
      ) : (
        <LoginAlertProfile className="px-8 py-4 min-h-[128px] " />
      )}
      <SectionButton
        disabled={isLogin}
        className="border-t border-gray-200"
        text={t('favorite-section-title')}
        to={PathName.BOOKMARK_MANAGE_PAGE}
      />
      <SectionButton
        disabled={isLogin}
        className="border-t border-b border-gray-200"
        text={t('review-section-title')}
        to={PathName.REVIEW_MANAGE_PAGE}
      />
      <Navigator menu="profile" />
    </div>
  );
};

export default ProfilePage;
