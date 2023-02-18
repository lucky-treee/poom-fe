import React from 'react';
import { ComponentStory } from '@storybook/react';
import 'index.css';

export default {
  title: 'Outline Button',
  component: 'div',
};

export const Default: ComponentStory<'div'> = () => (
  <button
    type="button"
    className="flex justify-center items-center bg-white border-[#c5c5c5] border p-2 rounded-md"
  >
    Button Text
  </button>
);

export const Small: ComponentStory<'div'> = () => (
  <button
    type="button"
    className="flex justify-center items-center bg-white border-[#c5c5c5] border py-1 px-2 rounded-md"
  >
    Button Text
  </button>
);

export const Hover: ComponentStory<'div'> = () => (
  <button
    type="button"
    className="flex justify-center items-center bg-[#F5F5F5] border-text border p-2 rounded-md"
  >
    Button Text
  </button>
);
