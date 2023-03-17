/* eslint-disable react/button-has-type */
import React from 'react';
import LoadingProgressIcon from 'components/LoadingProgressIcon';

type SizeOptions = 'default' | 'small';

type ButtonProps = {
  variant: 'main' | 'outlined' | 'contained';
  isLoading?: boolean;
  size?: SizeOptions;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Size: Record<SizeOptions, string> = {
  small: 'py-1 px-2',
  default: 'p-2',
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = 'default',
    children,
    variant,
    className,
    isLoading,
    ...rest
  } = props;

  const defaultStyle = 'flex justify-center items-center rounded-md';

  if (variant === 'main') {
    return (
      <button
        className={`${defaultStyle} bg-primary hover:bg-primary-hover text-white ${Size[size]} ${className}`}
        {...rest}
      >
        {isLoading ? <LoadingProgressIcon className="fill-white" /> : children}
      </button>
    );
  }
  if (variant === 'outlined') {
    return (
      <button
        className={`${defaultStyle} hover:bg-neutral-100 border-border-gray hover:border-text border ${Size[size]} ${className}`}
        {...rest}
      >
        {isLoading ? (
          <LoadingProgressIcon className="fill-primary" />
        ) : (
          children
        )}
      </button>
    );
  }

  return (
    <button className={`${defaultStyle} ${Size[size]} ${className}`} {...rest}>
      {isLoading ? <LoadingProgressIcon className="fill-primary" /> : children}
    </button>
  );
};

export default Button;
