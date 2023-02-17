import React from 'react';
import { ComponentStory } from '@storybook/react';
import 'index.css';

export default {
  title: 'Outline Button',
  component: 'div',
};

export const Default: ComponentStory<'div'> = () => (
  <div className="flex justify-center items-center bg-white hover:bg-[#F5F5F5] border-[#c5c5c5] hover:border-text border py-2 rounded-md">
    Button Text
  </div>
);

export const Small: ComponentStory<'div'> = () => (
  <div className="flex justify-center items-center bg-white hover:bg-[#F5F5F5] border-[#c5c5c5] hover:border-text border py-1 rounded-md">
    Button Text
  </div>
);

export const Hover: ComponentStory<'div'> = () => (
  <div className="flex justify-center items-center bg-[#F5F5F5] border-text border py-1 rounded-md">
    Button Text
  </div>
);
