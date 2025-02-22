import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/lib/shadcn/ui/dropdown-menu';
import React from 'react';

export type dropdownContent = {
  content: React.ReactNode | string;
  onClick?: () => void;
};

export interface DropdownProps {
  dropdownTrigger: React.ReactNode | string;
  dropdownContent?: React.ReactNode;
  onClick?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownTrigger, dropdownContent }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{dropdownTrigger ?? 'Dropdown'}</DropdownMenuTrigger>
      <DropdownMenuContent>{dropdownContent}</DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
