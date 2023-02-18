import React from 'react';
import { ComponentStory } from '@storybook/react';
import OutlineButton from 'components/OutlineButton';
import 'index.css';

export default {
  title: 'Outline Button',
  component: 'button',
};

export const Default: ComponentStory<'div'> = () => (
  <OutlineButton type="default" width="10rem">
    Button Text
  </OutlineButton>
);

export const Small: ComponentStory<'div'> = () => (
  <OutlineButton type="small" width="10rem">
    Button Text
  </OutlineButton>
);
