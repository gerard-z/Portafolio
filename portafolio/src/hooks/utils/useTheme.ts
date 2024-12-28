import { useState, useEffect } from 'react';

export function useTheme() {
  const [nightMode, setNightMode] = useState(() => {
    const savedMode = localStorage.getItem('nightMode');
    // Si no hay preferencia guardada, usar la preferencia del sistema
    if (savedMode === null) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return JSON.parse(savedMode);
  });

  useEffect(() => {
    localStorage.setItem('nightMode', JSON.stringify(nightMode));
    document.documentElement.setAttribute('data-theme', nightMode ? 'dark' : 'light');
  }, [nightMode]);

  const toggleNightMode = () => setNightMode(!nightMode);

  return { nightMode, toggleNightMode };
}