import React, { useEffect, useState } from 'react';
import { ReactComponent as BackIcon } from 'assets/components/navigate/Back.svg';
import Button from 'components/Button';
import LocateButton from 'components/map/LocateButton';
import ShopMarker from 'components/map/ShopMarker';
import UserMarker from 'components/map/UserMarker';
import Typography from 'components/Typography';
import { LocationType } from 'models/Location';
import { useGeolocated } from 'react-geolocated';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Map } from 'react-kakao-maps-sdk';

type MapInputProps = {
  open: boolean;
  onClose?: () => void;
};

const MapInput: React.FC<MapInputProps> = (props) => {
  const { open, onClose } = props;

  const { setValue } = useFormContext();

  const { t } = useTranslation();

  const { coords, getPosition } = useGeolocated({ watchPosition: true });

  const [centerLocation, setCenterLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  const [userLocation, setUserLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  const [selectedLocation, setSelectedLocation] = useState<LocationType>({
    lat: 0,
    lng: 0,
  });

  const handleMapClose = () => {
    onClose && onClose();
  };

  useEffect(() => {
    if (selectedLocation.lat !== 0) {
      const geocoder = new kakao.maps.services.Geocoder();

      geocoder.coord2Address(
        selectedLocation.lng,
        selectedLocation.lat,
        (result, status) => {
          if (status === kakao.maps.services.Status.OK && result.length > 0) {
            setValue('address', result[0].address.address_name);
            setValue('lat', selectedLocation.lat);
            setValue('lng', selectedLocation.lng);
          }
        }
      );
    }
  }, [selectedLocation]);

  const handleMapClick = (
    _map: kakao.maps.Map,
    event: kakao.maps.event.MouseEvent
  ) => {
    const latlng = event.latLng;
    setSelectedLocation({ lat: latlng.getLat(), lng: latlng.getLng() });
  };

  const handleMapCenterChanged = (map: kakao.maps.Map) => {
    setCenterLocation({
      lat: map.getCenter().getLat(),
      lng: map.getCenter().getLng(),
    });
  };

  const isCenterLocationInitialized = centerLocation.lat !== 0;

  useEffect(() => {
    if (coords) {
      setUserLocation({ lat: coords.latitude, lng: coords.longitude });
      if (!isCenterLocationInitialized) {
        setCenterLocation({ lat: coords.latitude, lng: coords.longitude });
      }
    }
  }, [coords, isCenterLocationInitialized]);

  const handleLocateButtonClick = () => {
    getPosition();
    setCenterLocation({ ...userLocation });
  };

  return (
    <div
      className={`${
        open ? '' : 'hidden'
      } absolute top-0 left-0 w-full h-full bg-white`}
    >
      <div className="flex flex-row justify-between items-center p-2">
        <button
          type="button"
          className="flex flex-row gap-1 items-center rounded-full"
          onClick={handleMapClose}
        >
          <BackIcon />
        </button>
        <Typography type="subtitle">
          {t('search-map-location-title')}
        </Typography>
        <Button
          type="button"
          variant="contained"
          className="flex flex-row gap-1 items-center text-primary"
          onClick={handleMapClose}
        >
          {t('select-location-button-text')}
        </Button>
      </div>
      <Map
        isPanto
        className="w-full h-full"
        center={centerLocation}
        level={3}
        onCenterChanged={handleMapCenterChanged}
        onClick={handleMapClick}
      >
        <UserMarker userLocation={userLocation} />
        <ShopMarker shopLocation={selectedLocation} />
      </Map>
      <LocateButton
        onClick={handleLocateButtonClick}
        className="absolute bottom-[70px] right-4 z-50"
      />
    </div>
  );
};

export default MapInput;
