import React from 'react';

type InputProps = {
  placeholder?: string;
  type?: 'default' | 'active' | 'error';
};

const InputBox: React.FC<InputProps> = (props) => {
  const { placeholder, type } = props;

  if (type === ('default' || undefined)) {
    return (
      <input
        className="bg-white border-[#c5c5c5] border text-placeholder px-4 py-3 rounded-md"
        placeholder={placeholder}
      />
    );
  }
  if (type === 'active') {
    return (
      <input
        className="bg-white border-sky-500 border text-placeholder px-4 py-3 rounded-md"
        placeholder={placeholder}
      />
    );
  }
  if (type === 'error') {
    return (
      <input
        className="bg-white border-red-500 border text-placeholder px-4 py-3 rounded-md"
        placeholder={placeholder}
      />
    );
  }

  return (
    <input
      className="bg-white border-[#c5c5c5] border text-placeholder px-4 py-3 rounded-md"
      placeholder={placeholder}
    />
  );
};

export default InputBox;
