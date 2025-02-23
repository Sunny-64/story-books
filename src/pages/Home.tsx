import React from 'react';
import { ToggleButton } from '../components';
import { useTheme } from '../hooks';

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <ToggleButton
        label='Dark Mode'
        labelStyles="font-medium"
        enabled={theme === 'dark'}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        containerClassName="absolute top-5 right-5"
      />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to story books !!</h1>
        <p className="text-xl mt-4 font-medium text-gray-400 mb-2">Coming Soon!</p>
      </div>
    </div>
  );
};

export default Home;
