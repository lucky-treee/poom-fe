import React from 'react';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Color',
  component: 'div',
};

export const Primary: ComponentStory<'div'> = () => (
  <div className="bg-primary text-white p-4">Primary</div>
);

export const Secondary: ComponentStory<'div'> = () => (
  <div className="bg-secondary text-white p-4">Secondary</div>
);

export const Error: ComponentStory<'div'> = () => (
  <div className="bg-error text-white p-4">Error</div>
);

export const Active: ComponentStory<'div'> = () => (
  <div className="bg-active text-white p-4">Active</div>
);

export const Link: ComponentStory<'div'> = () => (
  <div className="bg-link text-white p-4">Link</div>
);

export const Placeholder: ComponentStory<'div'> = () => (
  <div className="bg-placeholder text-white p-4">Placeholder</div>
);

export const Disabled: ComponentStory<'div'> = () => (
  <div className="bg-disabled text-white p-4">Disabled</div>
);

export const Text: ComponentStory<'div'> = () => (
  <div className="bg-text text-white p-4">Text</div>
);
