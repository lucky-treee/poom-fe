import React from 'react';
import PathName from 'constants/PathName';
import NavigatorCurve from 'assets/NavigatorCurve';
import { ReactComponent as AddShopIcon } from 'assets/AddShopIcon.svg';
import MapIcon from 'assets/MapIcon';
import ProfileIcon from 'assets/ProfileIcon';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Typography from 'components/Typography';

type NavigatorProps = {
  menu: 'map' | 'profile';
};

const Navigator: React.FC<NavigatorProps> = (props) => {
  const { menu } = props;

  const navigate = useNavigate();

  const handleMapBtnClick = () => {
    navigate(PathName.MAP_PAGE);
  };

  const handleProfileBtnClick = () => {
    navigate(PathName.PROFILE_PAGE);
  };

  const { t } = useTranslation();

  return (
    <nav className="absolute bottom-0 flex justify-center w-full z-10 ">
      <button
        type="button"
        className="absolute mb-7 bottom-0 flex justify-center items-center w-13 h-13 rounded-full bg-primary hover:bg-primary-hover drop-shadow"
      >
        <AddShopIcon />
      </button>
      <div className="flex justify-center mt-7 w-full h-13.5 drop-shadow-md-reverse ">
        <button
          type="button"
          className={`w-full h-13.5 bg-white ${
            menu === 'map' ? 'text-primary' : 'text-placeholder'
          }`}
          onClick={handleMapBtnClick}
        >
          <MapIcon selected={menu === 'map'} />
          <Typography type="caption">{t('map-navigator-menu-text')}</Typography>
        </button>
        <NavigatorCurve />
        <button
          type="button"
          className={`w-full h-13.5 bg-white ${
            menu === 'profile' ? 'text-primary' : 'text-placeholder'
          }`}
          onClick={handleProfileBtnClick}
        >
          <ProfileIcon selected={menu === 'profile'} />
          <Typography type="caption">
            {t('profile-navigator-menu-text')}
          </Typography>
        </button>
      </div>
    </nav>
  );
};

export default Navigator;
