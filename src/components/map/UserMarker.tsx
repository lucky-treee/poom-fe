import React from 'react';
import UserImgSrc from 'assets/user.svg';
import { LocationType } from 'models/Location';
import { MapMarker } from 'react-kakao-maps-sdk';

type UserMarkerProps = {
  userLocation: LocationType;
};

const UserMarker: React.FC<UserMarkerProps> = (props) => {
  const { userLocation } = props;

  return (
    <MapMarker
      position={userLocation}
      image={{
        src: UserImgSrc,
        size: {
          width: 25,
          height: 25,
        },
      }}
    />
  );
};

export default UserMarker;
