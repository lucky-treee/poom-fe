import React from 'react';
import { ReactComponent as LoadingProgressSVGIcon } from 'assets/components/Loading.svg';

interface LoadingProgressIconProps {
  className?: string;
}

const LoadingProgressIcon: React.FC<LoadingProgressIconProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={`flex justify-center items-center animate-spin ${className}`}
    >
      <LoadingProgressSVGIcon />
    </div>
  );
};

export default LoadingProgressIcon;
