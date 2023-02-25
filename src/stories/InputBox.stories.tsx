import React from 'react';
import { ComponentStory } from '@storybook/react';
import InputBox from 'components/InputBox';
import 'index.css';

export default {
  title: 'Input Box',
  component: 'input',
};

export const Default: ComponentStory<'input'> = () => (
  <InputBox type="default" placeholder="Placeholder" />
);

export const Active: ComponentStory<'input'> = () => (
  <InputBox type="active" placeholder="Placeholder" />
);

export const Error: ComponentStory<'input'> = () => (
  <InputBox type="error" placeholder="Placeholder" />
);
