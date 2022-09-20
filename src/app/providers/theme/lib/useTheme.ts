import { useContext } from 'react';
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

    return {
        theme, toggleTheme
    };
};