import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  type: 'default' | 'small';
  width: string; // ex) 14px
};

const OutlineButton: React.FC<ButtonProps> = (props) => {
  const { children, type, width } = props;

  if (type === 'default') {
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
  if (type === 'small') {
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
      className="flex justify-center items-center bg-white hover:bg-[#F5F5F5] border-[#c5c5c5] hover:border-text border p-2 rounded-md"
      style={{ width: `${width}` }}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
