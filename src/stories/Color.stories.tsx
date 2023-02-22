import React from 'react';
import 'index.css';

export default {
  title: 'Color',
  component: 'div',
};

export const Primary = () => (
  <div className="bg-primary text-white p-4">Primary</div>
);

export const Secondary = () => (
  <div className="bg-secondary text-white p-4">Secondary</div>
);

export const Error = () => <div className="bg-error text-white p-4">Error</div>;

export const Active = () => (
  <div className="bg-active text-white p-4">Active</div>
);

export const Link = () => <div className="bg-link text-white p-4">Link</div>;

export const Placeholder = () => (
  <div className="bg-placeholder text-white p-4">Placeholder</div>
);

export const Disabled = () => (
  <div className="bg-disabled text-white p-4">Disabled</div>
);

export const Text = () => <div className="bg-text text-white p-4">Text</div>;
