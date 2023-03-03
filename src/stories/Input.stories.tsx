import React from 'react';
import { StoryFn } from '@storybook/react';
import Input from 'components/Input';
import 'index.css';

export default {
  title: 'Input',
  component: Input,
};

export const Default: StoryFn<typeof Input> = () => (
  <Input name="example" placeholder="Placeholder" />
);
