import React from 'react';
import { StoryFn } from '@storybook/react';
import Button from 'components/base/Button';
import 'index.css';

export default {
  title: 'Button',
  component: Button,
};

export const Main: StoryFn<typeof Button> = () => (
  <Button variant="main" className="w-40">
    Button Text
  </Button>
);

export const MainSmall: StoryFn<typeof Button> = () => (
  <Button variant="main" size="small" className="w-40">
    Button Text
  </Button>
);

export const Outline: StoryFn<typeof Button> = () => (
  <Button variant="outlined" className="w-40">
    Button Text
  </Button>
);

export const OutlineSmall: StoryFn<typeof Button> = () => (
  <Button variant="outlined" size="small" className="w-40">
    Button Text
  </Button>
);

export const Contained: StoryFn<typeof Button> = () => (
  <Button variant="contained" className="text-black w-40">
    Button Text
  </Button>
);

export const ContainedSmall: StoryFn<typeof Button> = () => (
  <Button variant="contained" size="small" className="text-black w-40">
    Button Text
  </Button>
);
