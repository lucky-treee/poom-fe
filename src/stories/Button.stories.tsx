import React from 'react';
import { ComponentStory } from '@storybook/react';
import Button from 'components/Button';
import 'index.css';

export default {
  title: 'Button',
  component: 'button',
};

export const Main: ComponentStory<'div'> = () => (
  <Button type="main" className="w-40">
    Button Text
  </Button>
);

export const MainSmall: ComponentStory<'div'> = () => (
  <Button type="main" size="small" className="w-40">
    Button Text
  </Button>
);

export const Outline: ComponentStory<'div'> = () => (
  <Button type="outlined" className="w-40">
    Button Text
  </Button>
);

export const OutlineSmall: ComponentStory<'div'> = () => (
  <Button type="outlined" size="small" className="w-40">
    Button Text
  </Button>
);
