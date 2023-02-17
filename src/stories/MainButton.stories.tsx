import React from 'react';
import { ComponentStory } from '@storybook/react';
import 'index.css';

export default {
  title: 'Main Button',
  component: 'div',
};

export const Default: ComponentStory<'div'> = () => (
  <div className="flex justify-center items-center bg-primary hover:bg-primary-hover text-white py-2 rounded-md">
    Button Text
  </div>
);

export const Small: ComponentStory<'div'> = () => (
  <div className="flex justify-center items-center bg-primary hover:bg-primary-hover text-white py-1 rounded-md">
    Button Text
  </div>
);

export const Hover: ComponentStory<'div'> = () => (
  <div className="flex justify-center items-center bg-primary-hover text-white py-1 rounded-md">
    Button Text
  </div>
);
