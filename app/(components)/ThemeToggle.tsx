'use client';

import { Moon, Sun } from 'lucide-react';

import { Toggle } from '@/components/ui';
import { useTheme } from '@/utils/contexts';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const onToggleClick = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.className = updatedTheme;    
    document.cookie = `theme=${updatedTheme}; path=/`;
  };

  return <Toggle variant='outline' onClick={onToggleClick}>{theme === 'light' ? <Sun /> : <Moon />}</Toggle>;
};
