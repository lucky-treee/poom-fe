import React from 'react';
import { ComponentStory } from '@storybook/react';
import 'index.css';

export default {
  title: 'Input Box',
  component: 'div',
};

export const Default: ComponentStory<'div'> = () => (
  <input
    type="text"
    className="bg-white border-[#c5c5c5] border text-placeholder px-4 py-3 rounded-md"
    placeholder="Placeholder"
  />
);

export const Active: ComponentStory<'div'> = () => (
  <input
    type="text"
    className="bg-white border-sky-500 border text-placeholder px-4 py-3 rounded-md"
    placeholder="Placeholder"
  />
);

export const Error: ComponentStory<'div'> = () => (
  <input
    type="text"
    className="bg-white border-red-500 border text-placeholder px-4 py-3 rounded-md"
    placeholder="Placeholder"
  />
);
