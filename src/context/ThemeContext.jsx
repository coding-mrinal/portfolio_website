import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return true;
  });

  useEffect(() => {
    document.body.classList.remove('transition-colors');
    document.body.classList.remove('duration-300');
    
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    const timer = setTimeout(() => {
      document.body.classList.add('transition-colors');
      document.body.classList.add('duration-300');
    }, 100);

    return () => clearTimeout(timer);
  }, [darkMode]);

  const toggleTheme = () => {
    requestAnimationFrame(() => {
      setDarkMode(!darkMode);
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};