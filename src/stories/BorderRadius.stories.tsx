import React from 'react';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Border Radius',
  component: 'div',
};

export const RoundedMd: ComponentStory<'div'> = () => (
  <div className="bg-primary text-white p-4 rounded-md">Rounded Md</div>
);
