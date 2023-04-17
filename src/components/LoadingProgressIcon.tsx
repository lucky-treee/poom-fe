import React from 'react';
import { ReactComponent as LoadingProgressSVGIcon } from 'assets/components/Loading.svg';
import { ReactComponent as SmallLoadingProgressSVGIcon } from 'assets/components/SmallLoading.svg';

interface LoadingProgressIconProps {
  className?: string;
  size?: 'default' | 'small';
}

const LoadingProgressIcon: React.FC<LoadingProgressIconProps> = (props) => {
  const { className, size = 'default' } = props;

  return (
    <div
      className={`flex justify-center items-center animate-spin ${className}`}
    >
      {size === 'default' ? (
        <LoadingProgressSVGIcon />
      ) : (
        <SmallLoadingProgressSVGIcon />
      )}
    </div>
  );
};

export default LoadingProgressIcon;
