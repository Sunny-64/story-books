import { Input, Field, Label } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

export interface TextInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  customStyles?: string;
  containerStyles?: string;
  labelStyles?: string;
  suffixIcon?: React.ReactNode;
  suffixIconStyles?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  labelStyles,
  containerStyles,
  customStyles,
  suffixIcon,
  suffixIconStyles,
}) => {
  return (
    <Field className={containerStyles}>
      {label && (
        <Label htmlFor={name} className={twMerge('cursor-pointer', labelStyles)}>
          {label}
        </Label>
      )}
      <div className={twMerge('flex items-center border-2 border-gray-400 rounded-md px-4 py-1', customStyles)}>
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          className={twMerge('outline-gray-500 flex-grow placeholder:text-gray-500 outline-none')}
        />
        {suffixIcon && <span className={twMerge('py-2 px-2', suffixIconStyles)}>{suffixIcon}</span>}
      </div>
    </Field>
  );
};
