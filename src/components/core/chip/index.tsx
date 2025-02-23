import React from 'react';

interface ChipProps {
  chipText: React.ReactNode | string;
  shape?: 'capsule' | 'flat';
  customStyles?: string;
}

const variantStyles = {
  capsule: 'rounded-full',
  flat: 'rounded-md',
};

export const Chip: React.FC<ChipProps> = ({ chipText, shape = 'flat', customStyles }) => {
  return (
    <span
      className={`bg-complement-yellow text-sm font-medium text-gray-500 rounded-md px-4 py-2 ${variantStyles[shape]} ${customStyles}`}
    >
      {chipText}
    </span>
  );
};
