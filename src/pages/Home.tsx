import React, { useContext } from 'react';
import { ToggleButton } from '../components';
import { IThemeContext, ThemeContext } from '../context/ThemeProvider';

const Home: React.FC = () => {
  const { theme, toggleTheme } = useContext<IThemeContext | null>(ThemeContext)!;
  return (
    <div>
      <ToggleButton
        label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        labelStyles={`font-medium ${theme === 'light' ? 'text-dark-primary' : 'text-primary'}`}
        enabled={theme === 'dark'}
        onClick={() => toggleTheme()}
        containerClassName="absolute top-5 right-5"
      />
      <div className={`min-h-screen flex flex-col justify-center items-center ${theme === 'light' ? "bg-secondary text-dark-primary" : "bg-dark-secondary text-primary"}`}>
        <h1 className="text-4xl font-bold">Welcome to story books !!</h1>
        <p className="text-xl mt-4 font-medium text-gray-400 mb-2">Coming Soon!</p>
      </div>
    </div>
  );
};

export default Home;
