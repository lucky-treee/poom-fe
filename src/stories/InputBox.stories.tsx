import React from 'react';
import { ComponentStory } from '@storybook/react';
import 'index.css';

export default {
  title: 'Input Box',
  component: 'div',
};

export const Default: ComponentStory<'div'> = () => (
  <div className="bg-white border-[#c5c5c5] border text-placeholder px-4 py-3 rounded-md">
    Placeholder
  </div>
);

export const Active: ComponentStory<'div'> = () => (
  <div className="bg-white border-sky-500 border text-placeholder px-4 py-3 rounded-md">
    Placeholder
  </div>
);

export const Error: ComponentStory<'div'> = () => (
  <div className="bg-white border-red-500 border text-placeholder px-4 py-3 rounded-md">
    Placeholder
  </div>
);
