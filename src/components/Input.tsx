import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type InputProps<T> = {
  name: string;
  className?: string;
  accept?: string;
  placeholder?: T;
  defaultValue?: T;
  type?: React.HTMLInputTypeAttribute;
} & RegisterOptions;

const style = {
  normal: 'focus:border-sky-500',
  error: 'border-red-500',
};

function Input<T>(props: InputProps<T>) {
  const { name, placeholder, type, className, accept, ...registerOptions } =
    props;

  const { register, formState, getFieldState } = useFormContext();

  const { error } = getFieldState(name, formState);

  return (
    <div className="flex flex-col w-full">
      <input
        className={`border outline-0 w-full px-4 py-3 border-border-gray rounded-md ${
          error ? style.error : style.normal
        } ${className}`}
        accept={accept}
        type={type}
        placeholder={typeof placeholder === 'string' ? placeholder : undefined}
        {...register(name, registerOptions)}
      />
      {error && (
        <p className="text-xs w-full px-4 pt-2 text-red-500">{error.message}</p>
      )}
    </div>
  );
}

export default Input;
