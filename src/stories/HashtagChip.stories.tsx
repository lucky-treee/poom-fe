import React from 'react';
import HashtagChip from 'components/HashtagChip';
import 'index.css';

export default {
  title: 'HashtagChip',
  component: 'div',
};

export const Default = () => <HashtagChip hashtag="NICE" size="default" />;

export const Small = () => <HashtagChip hashtag="NICE" size="small" />;
