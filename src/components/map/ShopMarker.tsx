import React from 'react';
import ShopImgSrc from 'assets/components/navigate/shop.svg';
import { LocationType } from 'models/Location';
import { MapMarker } from 'react-kakao-maps-sdk';

type ShopMarkerProps = {
  onClick: () => void;
  shopLocation: LocationType;
};

const ShopMarker: React.FC<ShopMarkerProps> = (props) => {
  const { onClick, shopLocation } = props;

  return (
    <MapMarker
      onClick={onClick}
      position={shopLocation}
      image={{
        src: ShopImgSrc,
        size: {
          width: 34,
          height: 38,
        },
      }}
    />
  );
};

export default ShopMarker;
