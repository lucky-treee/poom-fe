import React from 'react';
import { ComponentStory } from '@storybook/react';
import InputBox from 'components/InputBox';
import 'index.css';

export default {
  title: 'Input Box',
  component: 'input',
};

export const Default: ComponentStory<'div'> = () => (
  <InputBox type="default" placeholder="Placeholder" />
);

export const Active: ComponentStory<'div'> = () => (
  <InputBox type="active" placeholder="Placeholder" />
);

export const Error: ComponentStory<'div'> = () => (
  <InputBox type="error" placeholder="Placeholder" />
);
