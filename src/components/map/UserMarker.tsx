import React from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import UserImgSrc from 'assets/user.png';
import { LocationType } from 'models/Location';

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
