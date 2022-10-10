import { useContext, useEffect } from 'react';
import { Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return {
        theme, toggleTheme
    };
};