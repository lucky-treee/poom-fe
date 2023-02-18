import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from 'components/Button';
import 'index.css';

export default {
  title: 'Button',
  component: 'button',
};

export const Main: ComponentStory<'div'> = () => (
  <Button type="main" width="10rem">
    Button Text
  </Button>
);

export const MainSmall: ComponentStory<'div'> = () => (
  <Button type="main-s" width="10rem">
    Button Text
  </Button>
);

export const Outline: ComponentStory<'div'> = () => (
  <Button type="outlined" width="10rem">
    Button Text
  </Button>
);

export const OutlineSmall: ComponentStory<'div'> = () => (
  <Button type="outlined-s" width="10rem">
    Button Text
  </Button>
);
