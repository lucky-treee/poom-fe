import React from 'react';
import { ComponentStory } from '@storybook/react';
import Typography from 'components/Typography';

export default {
  title: 'Typography',
  component: Typography,
};

export const EnglishTitle: ComponentStory<typeof Typography> = () => (
  <Typography type="title">English Title Component</Typography>
);

export const KoreanTitle: ComponentStory<typeof Typography> = () => (
  <Typography type="title">한글 제목 컴포넌트</Typography>
);

export const EnglishSubTitle: ComponentStory<typeof Typography> = () => (
  <Typography type="subtitle">English SubTitle Component</Typography>
);

export const KoreanSubTitle: ComponentStory<typeof Typography> = () => (
  <Typography type="subtitle">한글 부제목 컴포넌트</Typography>
);

export const EnglishBody: ComponentStory<typeof Typography> = () => (
  <Typography type="body">English Body Component</Typography>
);

export const KoreanBody: ComponentStory<typeof Typography> = () => (
  <Typography type="body">한글 본문 컴포넌트</Typography>
);

export const EnglishCaption: ComponentStory<typeof Typography> = () => (
  <Typography type="caption">English Caption Component</Typography>
);

export const KoreanCaption: ComponentStory<typeof Typography> = () => (
  <Typography type="caption">한글 설명 컴포넌트</Typography>
);
