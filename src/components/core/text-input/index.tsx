import { twMerge } from 'tailwind-merge';
export interface TextInputProps {
  id: string;
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
    <div className={containerStyles}>
      {label && (
        <label htmlFor={name} className={twMerge('cursor-pointer', labelStyles)}>
          {label}
        </label>
      )}
      <div className={twMerge('flex gap-2 items-center border-2 border-gray-400 rounded-md px-4 py-1', customStyles)}>
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          className={`w-full outline-none border-none px-0 shadow-none`}
          autoComplete="off"
        />
        {suffixIcon && <span className={twMerge(' cursor-pointer grow-1', suffixIconStyles)}>{suffixIcon}</span>}
      </div>
    </div>
  );
};
