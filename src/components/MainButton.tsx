import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: 'default' | 'small';
  width: string; // ex) 14px
};

const MainButton: React.FC<ButtonProps> = (props) => {
  const { children, type, width } = props;

  if (type === 'default') {
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
  if (type === 'small') {
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

export default MainButton;
