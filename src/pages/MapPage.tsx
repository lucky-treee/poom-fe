import React, { useEffect, useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import { Map } from 'react-kakao-maps-sdk';
import UserMarker from 'components/map/UserMarker';
import LocateButton from 'components/map/LocateButton';
import { LocationType } from 'models/Location';
import Navigator from 'components/Navigator';

const MapPage: React.FC = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled, getPosition } =
    useGeolocated({ watchPosition: true });

  const [centerLocation, setCenterLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  const [userLocation, setUserLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  const isCenterLocationInitialized = centerLocation.lat !== 0;

  useEffect(() => {
    if (coords) {
      setUserLocation({ lat: coords.latitude, lng: coords.longitude });
      if (!isCenterLocationInitialized) {
        setCenterLocation({ lat: coords.latitude, lng: coords.longitude });
      }
    }
  }, [coords, isCenterLocationInitialized]);

  if (!isGeolocationAvailable) {
    // TODO: Geolocation API를 지원하지 않는 브라우저에 대한 처리
    return <div>Your browser does not support Geolocation</div>;
  }

  if (!isGeolocationEnabled) {
    // TODO: Geolocation API를 지원하지만 사용자가 위치 정보 공유를 거부한 경우에 대한 처리
    return <div>Geolocation is not enabled</div>;
  }

  const handleMapCenterChanged = (map: kakao.maps.Map) => {
    setCenterLocation({
      lat: map.getCenter().getLat(),
      lng: map.getCenter().getLng(),
    });
  };

  const handleLocateButtonClick = () => {
    getPosition();
    setCenterLocation({ ...userLocation });
  };

  return (
    <div className="w-screen h-screen">
      <Navigator type="map" />
      <Map
        isPanto
        className="w-full h-full"
        center={centerLocation}
        level={3}
        onCenterChanged={handleMapCenterChanged}
      >
        <UserMarker userLocation={userLocation} />
      </Map>
      <LocateButton
        onClick={handleLocateButtonClick}
        className="absolute bottom-[70px] right-4 z-50"
      />
    </div>
  );
};

export default MapPage;
