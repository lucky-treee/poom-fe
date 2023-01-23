import React from 'react';
import { useGeolocated } from 'react-geolocated';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapPage: React.FC = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated();

  if (!isGeolocationAvailable) {
    // TODO: Geolocation API를 지원하지 않는 브라우저에 대한 처리
    return <div>Your browser does not support Geolocation</div>;
  }

  if (!isGeolocationEnabled) {
    // TODO: Geolocation API를 지원하지만 사용자가 위치 정보 공유를 거부한 경우에 대한 처리
    return <div>Geolocation is not enabled</div>;
  }

  const { latitude: lat, longitude: lng } = coords || {
    latitude: 0,
    longitude: 0,
  };

  return (
    <div className="w-screen h-screen">
      <Map className="w-full h-full" center={{ lat, lng }} level={3}>
        <MapMarker position={{ lat, lng }} />
      </Map>
    </div>
  );
};

export default MapPage;
