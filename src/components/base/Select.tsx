import React, { useEffect, useState } from 'react';
import DropDownSrc from 'assets/components/DropDown.svg';
import DropUpSrc from 'assets/components/DropUp.svg';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type SelectProps = {
  name: string;
  options: string[];
  values?: string[];
  className?: string;
  placeholder?: string;
  defaultValue?: string;
} & RegisterOptions;

const style = {
  normal: 'focus:border-sky-500',
  error: 'border-red-500',
};

const HiddenOptions: React.FC<Pick<SelectProps, 'options' | 'values'>> = (
  props
) => {
  const { options, values } = props;

  return (
    <>
      {options.map((option, index) => (
        <option
          className="hidden"
          key={option}
          value={values ? values[index] : option}
        >
          {option}
        </option>
      ))}
    </>
  );
};

type SelectOptionProps = {
  isSelected: boolean;
  value: string;
  onMouseDown: (value: string) => void;
  className?: string;
};

const SelectOption: React.FC<SelectOptionProps> = (props) => {
  const { isSelected, value, onMouseDown, className } = props;

  const handleMouseDown = () => onMouseDown(value);

  return (
    <div
      className={`${className} ${isSelected ? 'bg-selected' : ''} px-4 py-3`}
      onMouseDown={handleMouseDown}
    >
      {value}
    </div>
  );
};

const Select: React.FC<SelectProps> = (props) => {
  const {
    name,
    placeholder,
    className,
    options,
    values,
    defaultValue,
    ...registerOptions
  } = props;

  const { register, formState, getFieldState, setValue, getValues } =
    useFormContext();

  const { error } = getFieldState(name, formState);

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    } else if (options.length > 0) {
      setValue(name, options[0]);
    }
  }, []);

  const selectedValue = getValues(name);

  const selectedOption = values
    ? options[values.indexOf(selectedValue)]
    : selectedValue;

  const [isFocused, setIsFocused] = useState(false);

  const handleFocused = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const handleOptionClick = (value: string) => {
    setValue(name, value);
    handleBlur();
  };

  return (
    <div className="relative flex flex-col w-full">
      <select
        style={{
          backgroundImage: `url(${isFocused ? DropUpSrc : DropDownSrc})`,
        }}
        className={`border outline-0 w-full px-4 py-3 appearance-none border-border-gray rounded-md bg-[length:14px_10px] bg-[calc(100%-14px)_50%] bg-no-repeat
           ${error ? style.error : style.normal} ${className}`}
        placeholder={placeholder}
        onFocus={handleFocused}
        value={selectedValue}
        {...register(name, registerOptions)}
        onBlur={handleBlur}
      >
        <HiddenOptions options={options} values={values} />
      </select>
      {error && (
        <p className="text-xs w-full px-4 pt-2 text-red-500">{error.message}</p>
      )}
      <div
        className={`${
          isFocused ? '' : 'hidden'
        } absolute top-[54px] w-full border bg-white border-border-gray rounded-md overflow-hidden shadow-md`}
      >
        {options.map((option, index) => {
          return (
            <SelectOption
              key={option}
              isSelected={selectedOption === option}
              value={option}
              className={
                index === options.length - 1
                  ? ''
                  : 'border-b border-border-gray'
              }
              onMouseDown={() => {
                handleOptionClick(values ? values[index] : option);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Select;
