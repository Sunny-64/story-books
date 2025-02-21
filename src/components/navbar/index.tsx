import { IoSearch } from 'react-icons/io5';
import { TextInput, ToggleButton } from '../core';
import { useContext } from 'react';
import { IThemeContext, ThemeContext } from '../../context/ThemeProvider';

const index = () => {
  const { theme, toggleTheme } = useContext<IThemeContext | null>(ThemeContext)!;

  return (
    <header className="w-full flex justify-between items-center">
      <h2 className="font-bold text-2xl text-accent">Story Books</h2>
      <TextInput
        name="search"
        placeholder="Search a book"
        suffixIcon={<IoSearch size={20} />}
        suffixIconStyles="bg-accent text-white rounded-full"
        customStyles="rounded-full pl-4 pr-2"
        containerStyles="basis-1/4"
      />

      <ul className="flex gap-4">
        <li>
          <ToggleButton
            label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            labelStyles="font-medium"
            enabled={theme === 'dark'}
            onClick={() => toggleTheme()}
          />
        </li>
        <li>Explorer</li>
        <li className="gap-2">
          <span>Username</span>
          {/* <span>user Image</span> */}
        </li>
      </ul>
    </header>
  );
};

export default index;
