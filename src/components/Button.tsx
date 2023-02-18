import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: 'main' | 'main-s' | 'outlined' | 'outlined-s';
  width: string; // ex) 14px
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, width } = props;

  if (type === 'main') {
    return (
      <button
        type="button"
        className="flex justify-center items-center bg-primary hover:bg-primary-hover text-white p-2 rounded-md"
        style={{ width: `${width}` }}
      >
        {children}
      </button>
    );
  }
  if (type === 'main-s') {
    return (
      <button
        type="button"
        className="flex justify-center items-center bg-primary hover:bg-primary-hover text-white py-1 px-2 rounded-md"
        style={{ width: `${width}` }}
      >
        {children}
      </button>
    );
  }
  if (type === 'outlined') {
    return (
      <button
        type="button"
        className="flex justify-center items-center bg-white hover:bg-[#F5F5F5] border-[#c5c5c5] hover:border-text border p-2 rounded-md"
        style={{ width: `${width}` }}
      >
        {children}
      </button>
    );
  }
  if (type === 'outlined-s') {
    return (
      <button
        type="button"
        className="flex justify-center items-center bg-white hover:bg-[#F5F5F5] border-[#c5c5c5] hover:border-text border py-1 px-2 rounded-md"
        style={{ width: `${width}` }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="flex justify-center items-center bg-primary hover:bg-primary-hover text-white p-2 rounded-md"
      style={{ width: `${width}` }}
    >
      {children}
    </button>
  );
};

export default Button;
