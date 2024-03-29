import React from 'react';
import { StoryFn } from '@storybook/react';
import Typography from 'components/base/Typography';

export default {
  title: 'Typography',
  component: Typography,
};

export const Title: StoryFn<typeof Typography> = () => (
  <div className="flex flex-col">
    <Typography type="title">English Title Component</Typography>
    <Typography type="title">한글 제목 컴포넌트</Typography>
  </div>
);

export const SubTitle: StoryFn<typeof Typography> = () => (
  <div className="flex flex-col">
    <Typography type="subtitle">English SubTitle Component</Typography>
    <Typography type="subtitle">한글 부제목 컴포넌트</Typography>
  </div>
);

export const BodyText: StoryFn<typeof Typography> = () => (
  <div className="flex flex-col">
    <Typography type="body">English Body Component</Typography>
    <Typography type="body">한글 본문 컴포넌트</Typography>
  </div>
);

export const Caption: StoryFn<typeof Typography> = () => (
  <div className="flex flex-col">
    <Typography type="caption">English Caption Component</Typography>
    <Typography type="caption">한글 설명 컴포넌트</Typography>
  </div>
);
