import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  type:
    | 'title'
    | 'subtitle'
    | 'caption'
    | 'border-caption'
    | 'body'
    | 'border-body'
    | 'code';
};

const Typography: React.FC<TypographyProps> = (props) => {
  const { children, type, className } = props;

  if (type === 'title') {
    return (
      <h1 className={`text-2xl font-bold leading-8 ${className}`}>
        {children}
      </h1>
    );
  }
  if (type === 'subtitle') {
    return (
      <h3 className={`text-lg font-bold leading-8 ${className}`}>{children}</h3>
    );
  }
  if (type === 'body') {
    return (
      <p className={`text-sm font-normal leading-5 ${className}`}>{children}</p>
    );
  }
  if (type === 'border-body') {
    return (
      <p className={`text-sm font-bold leading-5 ${className}`}>{children}</p>
    );
  }
  if (type === 'caption') {
    return (
      <p className={`text-xs font-normal leading-4 ${className}`}>{children}</p>
    );
  }
  if (type === 'border-caption') {
    return (
      <p className={`text-xs font-bold leading-4 ${className}`}>{children}</p>
    );
  }
  if (type === 'code') {
    return (
      <p className={`text-sm font-mono leading-4 ${className}`}>{children}</p>
    );
  }
  return (
    <p className={`text-sm font-normal leading-5 ${className}`}>{children}</p>
  );
};

export default Typography;
