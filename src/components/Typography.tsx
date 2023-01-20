import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  type: 'title' | 'subtitle' | 'caption' | 'body';
};

const Typography: React.FC<TypographyProps> = (props) => {
  const { children, type } = props;

  if (type === 'title') {
    return <h1 className="text-2xl font-bold leading-8">{children}</h1>;
  }
  if (type === 'subtitle') {
    return <h3 className="text-lg font-bold leading-8">{children}</h3>;
  }
  if (type === 'body') {
    return <p className="text-sm font-normal leading-5">{children}</p>;
  }
  if (type === 'caption') {
    return <p className="text-xs font-normal leading-4">{children}</p>;
  }

  return <p className="text-sm font-normal leading-5">{children}</p>;
};

export default Typography;
