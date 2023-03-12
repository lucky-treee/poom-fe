import React from 'react';
import Chip from 'components/Drawer';
import 'index.css';

export default {
  title: 'Chip',
  component: 'div',
};

export const Default = () => <Chip hashtag="NICE" size="default" />;

export const Small = () => <Chip hashtag="NICE" size="small" />;
