import React, { useEffect, useState } from 'react';
import LocateButton from 'components/map/LocateButton';
import ShopMarker from 'components/map/ShopMarker';
import UserMarker from 'components/map/UserMarker';
import Navigator from 'components/Navigator';
import ShopDrawer from 'components/ShopDrawer';
import useFetchShopList from 'hooks/api/useFetchShopList';
import useThrottledState from 'hooks/useThrottledState';
import { LocationType } from 'models/Location';
import { useGeolocated } from 'react-geolocated';
import { Map } from 'react-kakao-maps-sdk';

type MapBounds = {
  neLat: number;
  neLng: number;
  swLat: number;
  swLng: number;
};

const MapPage: React.FC = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled, getPosition } =
    useGeolocated({ watchPosition: true });

  const [centerLocation, setCenterLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  const [mapBounds, setMapBounds] = useThrottledState<MapBounds>(
    { neLat: 0, neLng: 0, swLat: 0, swLng: 0 },
    500
  );

  const [userLocation, setUserLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  const [shopIndex, setShopIndex] = useState(-1);

  const isShopDrawerOpen = shopIndex !== -1;

  const { neLat, neLng, swLat, swLng } = mapBounds;

  const { data } = useFetchShopList(neLat, neLng, swLat, swLng);

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

    setMapBounds({
      neLat: map.getBounds().getNorthEast().getLat(),
      neLng: map.getBounds().getNorthEast().getLng(),
      swLat: map.getBounds().getSouthWest().getLat(),
      swLng: map.getBounds().getSouthWest().getLng(),
    });
  };

  const handleLocateButtonClick = () => {
    getPosition();
    setCenterLocation({ ...userLocation });
  };

  const handleShopClick = (index: number) => {
    setShopIndex(index);
  };

  const handleShopDrawerClose = () => {
    setShopIndex(-1);
  };

  return (
    <div className="w-screen h-screen">
      <Navigator menu="map" />
      <Map
        isPanto
        className="w-full h-full"
        center={centerLocation}
        level={3}
        onCenterChanged={handleMapCenterChanged}
        onClick={handleShopDrawerClose}
      >
        <UserMarker userLocation={userLocation} />
        <div>
          {data?.map((shop, index) => {
            return (
              <ShopMarker
                onClick={() => handleShopClick(index)}
                key={shop.name}
                shopLocation={{ lat: shop.lat, lng: shop.lng }}
              />
            );
          })}
        </div>
        {isShopDrawerOpen ? (
          <ShopDrawer
            title="쓰레기 없는 행복 카페"
            category="카페, 커피"
            address="서울시 땡땡구 204-12 현대빌딩 301호"
            review={3012312300}
          />
        ) : null}
      </Map>
      <LocateButton
        onClick={handleLocateButtonClick}
        className="absolute bottom-[70px] right-4 z-50"
      />
    </div>
  );
};

export default MapPage;
