import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default {
  title: 'Map',
  component: Map,
} as ComponentMeta<typeof Map>;

export const DefaultMap: ComponentStory<typeof Map> = () => (
  <Map
    className="w-[500px] h-[400px]"
    center={{ lat: 37.566826, lng: 126.9786567 }}
    level={3}
  >
    <MapMarker position={{ lat: 37.566826, lng: 126.9786567 }} />
  </Map>
);
