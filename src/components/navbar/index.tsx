import { IoSearch } from 'react-icons/io5';
import { Button, TextInput, ToggleSwitch } from '../core';
import { useTheme } from '@/hooks';
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/shadcn/ui/avatar';
import Dropdown from '../core/dropdown';
import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/lib/shadcn/ui/dropdown-menu';
import { Link } from 'react-router-dom';

const MENU = [
  { label: 'Profile', to: '/profile' },
  { label: 'Diary', to: '/diary' },
  { label: 'Chats', to: '/chats' },
  { label: 'Notifications', to: '/notifications' },
  { label: 'Settings', to: '/settings' },
];

const index = () => {
  const { theme, setTheme } = useTheme();
  const login = false;

  return (
    <header className="grid grid-cols-2 sm:grid-cols-3 items-center overflow-x-hidden">
      <h2 className="font-bold text-2xl text-accent">Story Books</h2>
      <div className="sm:col-span-2 flex gap-2 justify-end items-center md:gap-4">
        <ul className="flex items-center gap-2 md:gap-4 font-medium">
          <li>Explorer</li>
          <li>
            <TextInput
              id={'search'}
              name="search"
              placeholder="Search a book"
              suffixIcon={<IoSearch size={20} />}
              suffixIconStyles="bg-accent text-white rounded-full px-2 py-2"
              customStyles={`rounded-full sm:pr-1 sm:pl-4 md:pr-2`}
              containerStyles="hidden sm:block px-0 md:basis-sm"
            />
          </li>
          <li>
            {!login ? (
              <Link to="/auth">
                <Button label="Login" />
              </Link>
            ) : (
              <Dropdown
                dropdownTrigger={
                  <span className="flex items-center gap-2">
                    <span>Coby</span>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </span>
                }
                dropdownContent={
                  <>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {MENU.map((item, index) => (
                      <DropdownMenuItem className="hover:bg-secondary!" key={index}>
                        {item.label}
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="hover:bg-secondary!">
                      <ToggleSwitch
                        label="Dark Mode"
                        labelStyles="font-medium"
                        enabled={theme === 'dark'}
                        containerClassName="flex items-center"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                      />
                    </DropdownMenuItem>
                  </>
                }
              />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default index;
