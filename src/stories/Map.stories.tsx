import React from 'react';
import { StoryFn } from '@storybook/react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default {
  title: 'Map',
  component: Map,
};

export const DefaultMap: StoryFn<typeof Map> = () => (
  <Map
    className="w-[500px] h-[400px]"
    center={{ lat: 37.566826, lng: 126.9786567 }}
    level={3}
  >
    <MapMarker position={{ lat: 37.566826, lng: 126.9786567 }} />
  </Map>
);
