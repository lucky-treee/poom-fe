import React from 'react';
import PathName from 'constants/PathName';
import { ReactComponent as AddShopIcon } from 'assets/components/navigate/AddShopIcon.svg';
import MapIcon from 'assets/components/navigate/MapIcon';
import NavigatorCurve from 'assets/components/navigate/NavigatorCurve';
import ProfileIcon from 'assets/components/navigate/ProfileIcon';
import Typography from 'components/Typography';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type NavigatorProps = {
  menu: 'map' | 'profile';
};

const Navigator: React.FC<NavigatorProps> = (props) => {
  const { menu } = props;

  const navigate = useNavigate();

  const handleMapButtonClick = () => {
    navigate(PathName.MAP_PAGE);
  };

  const handleProfileButtonClick = () => {
    navigate(PathName.PROFILE_PAGE);
  };

  const handleShopRegisterButtonClick = () => {
    navigate(PathName.SHOP_REGISTER_PAGE);
  };

  const { t } = useTranslation();

  return (
    <nav className="absolute bottom-0 flex justify-center w-full z-10 ">
      <button
        type="button"
        className="absolute mb-7 bottom-0 flex justify-center items-center w-13 h-13 rounded-full bg-primary hover:bg-primary-hover drop-shadow"
        onClick={handleShopRegisterButtonClick}
      >
        <AddShopIcon />
      </button>
      <div className="flex justify-center mt-7 w-full h-13.5 drop-shadow-md-reverse ">
        <button
          type="button"
          className={`w-full h-13.5 bg-white ${
            menu === 'map' ? 'text-primary' : 'text-placeholder'
          }`}
          onClick={handleMapButtonClick}
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
          onClick={handleProfileButtonClick}
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
