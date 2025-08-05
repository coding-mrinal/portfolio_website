// ThemeContext.jsx
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // 强制默认启用暗黑模式
    return true;
  });

  useEffect(() => {
    // 初始移除过渡效果避免首次加载动画
    document.body.classList.remove('transition-colors');
    document.body.classList.remove('duration-300');
    
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    // 添加过渡效果在初始渲染后
    const timer = setTimeout(() => {
      document.body.classList.add('transition-colors');
      document.body.classList.add('duration-300');
    }, 100);

    return () => clearTimeout(timer);
  }, [darkMode]);

  const toggleTheme = () => {
    // Add a small delay to ensure the transition is smooth
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