/* eslint-disable react/button-has-type */
import React from 'react';

type SizeOptions = 'default' | 'small';

type ButtonProps = {
  variant: 'main' | 'outlined' | 'contained';
  size?: SizeOptions;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Size: Record<SizeOptions, string> = {
  small: 'py-1 px-2',
  default: 'p-2',
};

const Button: React.FC<ButtonProps> = (props) => {
  const { size = 'default', children, variant, className, ...rest } = props;

  const defaultStyle = 'flex justify-center items-center rounded-md';

  if (variant === 'main') {
    return (
      <button
        className={`${defaultStyle} bg-primary hover:bg-primary-hover text-white ${Size[size]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
  if (variant === 'outlined') {
    return (
      <button
        className={`${defaultStyle} hover:bg-neutral-100 border-border-gray hover:border-text border ${Size[size]} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button className={`${defaultStyle} ${Size[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
