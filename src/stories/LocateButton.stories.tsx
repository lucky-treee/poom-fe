import React from 'react';
import { StoryFn } from '@storybook/react';
import LocateButton from 'components/map/LocateButton';

export default {
  title: 'LocateButton',
  component: LocateButton,
};

const Template: StoryFn<typeof LocateButton> = (args) => (
  <LocateButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  onClick: () => {},
  className: '',
};
