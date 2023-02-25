import React from 'react';
import { ReactComponent as LoadingProgressSVGIcon } from 'assets/components/Loading.svg';

const LoadingProgressIcon: React.FC = () => {
  return (
    <div className="flex justify-center items-center animate-spin">
      <LoadingProgressSVGIcon />
    </div>
  );
};

export default LoadingProgressIcon;
