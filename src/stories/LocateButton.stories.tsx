// create components/map/LocateButton.tsx storybook
import React from 'react';
import LocateButton from 'components/map/LocateButton';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'LocateButton',
  component: LocateButton,
};

const Template: ComponentStory<typeof LocateButton> = (args) => (
  <LocateButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  onClick: () => {},
  className: '',
};
