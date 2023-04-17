import { RegisterOptions, useFormContext } from 'react-hook-form';

type TextAreaProps<T> = {
  name: string;
  className?: string;
  placeholder?: T;
  defaultValue?: T;
  rows?: number;
} & RegisterOptions;

const style = {
  normal: 'focus:border-sky-500',
  error: 'border-red-500',
};

const TextArea = <T,>(props: TextAreaProps<T>) => {
  const { name, placeholder, rows, className, ...registerOptions } = props;

  const { register, formState, getFieldState } = useFormContext();

  const { error } = getFieldState(name, formState);

  return (
    <div className="flex flex-col w-full">
      <textarea
        className={`border text-sm outline-0 w-full px-4 py-3 border-border-gray rounded-md ${
          error ? style.error : style.normal
        } ${className}`}
        rows={rows}
        placeholder={typeof placeholder === 'string' ? placeholder : undefined}
        {...register(name, registerOptions)}
      />
      {error && (
        <p className="text-xs w-full px-4 pt-2 text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default TextArea;
