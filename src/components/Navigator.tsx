import React, { useState } from 'react';
import PathName from 'constants/PathName';
import AddShopIcon from 'assets/AddShopIcon';
import NavigatorCurve from 'assets/NavigatorCurve';
import MapIcon from 'assets/MapIcon';
import ProfileIcon from 'assets/ProfileIcon';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-restricted-imports
import Typography from './Typography';

type ColorProps = {
  type: 'map' | 'profile';
};

// 타입 지정 필요
const Navigator: React.FC<ColorProps> = (props) => {
  const { type } = props;

  const navigate = useNavigate();

  const goMap = () => {
    navigate(`${PathName.MAP_PAGE}`);
  };

  const goProfile = () => {
    navigate(`${PathName.PROFILE_PAGE}`);
  };

  return (
    <nav className="absolute bottom-0 flex justify-center w-full z-10 ">
      <button
        type="button"
        className="absolute mb-7 bottom-0 flex justify-center items-center w-13 h-13 rounded-full bg-primary hover:bg-primary-hover drop-shadow"
      >
        <AddShopIcon />
      </button>
      <div className="flex justify-center mt-7 btn-container w-full h-13.5 drop-shadow-md-reverse ">
        <button
          type="button"
          className={`w-full h-13.5 bg-white ${
            type === 'map' ? 'text-primary' : 'text-placeholder'
          }`}
          onClick={goMap}
        >
          <MapIcon
            className={type === 'map' ? 'fill-primary' : 'fill-placeholder'}
          />
          <Typography type="caption">지도</Typography>
        </button>
        <NavigatorCurve />
        <button
          type="button"
          className={`w-full h-13.5 bg-white ${
            type === 'profile' ? 'text-primary' : 'text-placeholder'
          }`}
          onClick={goProfile}
        >
          <ProfileIcon
            className={type === 'profile' ? 'fill-primary' : 'fill-placeholder'}
          />
          <Typography type="caption">마이페이지</Typography>
        </button>
      </div>
    </nav>
  );
};

export default Navigator;
