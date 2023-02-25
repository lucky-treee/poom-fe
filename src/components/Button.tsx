import React from 'react';

type ButtonProps = {
  type: 'main' | 'outlined';
  children?: React.ReactNode;
  size?: 'default' | 'small';
  className?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { size, children, type, className } = props;

  if (type === 'main' && size === 'default') {
    return (
      <button
        type="button"
        className={`flex justify-center items-center bg-primary hover:bg-primary-hover text-white p-2 rounded-md ${className}`}
      >
        {children}
      </button>
    );
  }
  if (type === 'main' && size === 'small') {
    return (
      <button
        type="button"
        className={`flex justify-center items-center bg-primary hover:bg-primary-hover text-white py-1 px-2 rounded-md ${className}`}
      >
        {children}
      </button>
    );
  }
  if (type === 'outlined' && size === 'default') {
    return (
      <button
        type="button"
        className={`flex justify-center items-center bg-white hover:bg-neutral-100 border-border-gray hover:border-text border p-2 rounded-md ${className}`}
      >
        {children}
      </button>
    );
  }
  if (type === 'outlined' && size === 'small') {
    return (
      <button
        type="button"
        className={`flex justify-center items-center bg-white hover:bg-neutral-100 border-border-gray hover:border-text border py-1 px-2 rounded-md ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="flex justify-center items-center bg-primary hover:bg-primary-hover text-white p-2 rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
