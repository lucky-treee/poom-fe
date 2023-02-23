import React from 'react';
import LocateButton from 'components/map/LocateButton';
import { StoryFn } from '@storybook/react';

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
