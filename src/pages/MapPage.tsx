import React, { useEffect, useState } from 'react';
import LocateButton from 'components/map/LocateButton';
import ShopMarker from 'components/map/ShopMarker';
import UserMarker from 'components/map/UserMarker';
import Navigator from 'components/Navigator';
import ShopModal from 'components/ShopModal';
import { LocationType } from 'models/Location';
import { Shop } from 'models/shop/Shop';
import { useGeolocated } from 'react-geolocated';
import { Map } from 'react-kakao-maps-sdk';
import { fetchShopList } from 'service/shop';

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

  const [shopList, setShopList] = useState<Shop[]>([]);

  const [modal, setModal] = useState<boolean>(false);

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

  // Error: 계속해서 데이터를 re-render 하게 됨.
  (async () => {
    const getShopList = await fetchShopList(
      userLocation.lat,
      userLocation.lat - 30,
      userLocation.lng,
      userLocation.lng - 30
    );
    setShopList(getShopList.data);
  })();

  const handleShopModal = () => {
    setModal(!modal);
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
      >
        <UserMarker userLocation={userLocation} />
        <div className="shopList">
          {shopList.map((shop) => {
            return (
              <ShopMarker
                onClick={handleShopModal}
                key={shop.name}
                shopLocation={{ lat: shop.lat, lng: shop.lng }}
              />
            );
          })}
        </div>
        {modal ? <ShopModal /> : null}
      </Map>
      <LocateButton
        onClick={handleLocateButtonClick}
        className="absolute bottom-[70px] right-4 z-50"
      />
    </div>
  );
};

export default MapPage;
