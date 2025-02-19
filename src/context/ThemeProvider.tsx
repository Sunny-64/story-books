import { createContext, useEffect, useState } from 'react';
import { getLocalItem, setLocalItem } from '../utils';

export interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(getLocalItem('theme') ?? 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setLocalItem('theme', JSON.stringify(newTheme));
  };

  useEffect(() => {
    document.getElementById("root")!.className = `${theme}-mode`;
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
