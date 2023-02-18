import React from 'react';
import { ComponentStory } from '@storybook/react';
import MainButton from 'components/MainButton';
import 'index.css';

export default {
  title: 'Main Button',
  component: 'button',
};

export const Default: ComponentStory<'div'> = () => (
  <MainButton type="default" width="10rem">
    Button Text
  </MainButton>
);

export const Small: ComponentStory<'div'> = () => (
  <MainButton type="small" width="10rem">
    Button Text
  </MainButton>
);
