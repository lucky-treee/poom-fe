import React from 'react';
import { ComponentStory } from '@storybook/react';
import 'index.css';

export default {
  title: 'Main Button',
  component: 'div',
};

export const Default: ComponentStory<'div'> = () => (
  <button
    type="button"
    className="flex justify-center items-center bg-primary text-white p-2 rounded-md"
  >
    Button Text
  </button>
);

export const Small: ComponentStory<'div'> = () => (
  <button
    type="button"
    className="flex justify-center items-center bg-primary text-white py-1 px-2 rounded-md"
  >
    Button Text
  </button>
);

export const Hover: ComponentStory<'div'> = () => (
  <button
    type="button"
    className="flex justify-center items-center bg-primary-hover text-white p-2 rounded-md"
  >
    Button Text
  </button>
);
