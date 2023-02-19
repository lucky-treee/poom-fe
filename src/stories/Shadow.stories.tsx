import React from 'react';
import 'index.css';

export default {
  title: 'Shadow',
  component: 'div',
};

type CardProps = {
  children: React.ReactNode;
  className: string;
};

const Card: React.FC<CardProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={`flex justify-center items-center  w-32 h-32 p-4 rounded-md bg-white text-sm ${className}`}
    >
      {children}
    </div>
  );
};

export const DropShadow = () => (
  <Card className="drop-shadow">Drop Shadow</Card>
);

export const DropShadowMd = () => (
  <Card className="drop-shadow-md">Drop Shadow Md</Card>
);

export const DropShadowMdReverse = () => (
  <Card className="drop-shadow-md-reverse">Drop Shadow Md Reverse</Card>
);
