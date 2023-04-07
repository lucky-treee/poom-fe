import React from 'react';
import { ReactComponent as EditIcon } from 'assets/auth/mingcute_pencil-fill.svg';
import Typography from 'components/base/Typography';
import { useTranslation } from 'react-i18next';
import type { Profile as ProfileType } from 'models/auth/Profile';

interface ProfileProps {
  userInformation: ProfileType;
  className?: string;
}

const Profile: React.FC<ProfileProps> = (props) => {
  const { userInformation, className } = props;

  const { profileImageSrc, nickname, email, reviewCount, favoriteCount } =
    userInformation;

  const { t } = useTranslation();

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex justify-center items-center relative bg-gray-500 w-[83px] h-[83px] rounded-full">
        <img
          className="border-4 box-content border-white w-[72px] h-[72px] rounded-full"
          src={profileImageSrc}
          alt="profile"
        />
        <button
          type="button"
          className="absolute bottom-1 right-1 shadow-md bg-white rounded-full p-1"
        >
          <EditIcon />
        </button>
      </div>
      <div className="gap-1">
        <Typography type="subtitle">{nickname}</Typography>
        <Typography className="text-gray-500" type="caption">
          {email}
        </Typography>
        <div className="flex flex-row gap-5 py-4">
          <div className="flex flex-row gap-2">
            <Typography className="text-gray-500" type="caption">
              {t('review-count')}
            </Typography>
            <Typography type="border-caption">
              {reviewCount.toLocaleString()}
            </Typography>
          </div>
          <div className="flex flex-row gap-2">
            <Typography className="text-gray-500" type="caption">
              {t('favorite-count')}
            </Typography>
            <Typography type="border-caption">
              {favoriteCount.toLocaleString()}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
