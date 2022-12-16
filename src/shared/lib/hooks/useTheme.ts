import { useContext, useEffect } from 'react';
import { Theme } from '@/shared/config/const/theme';
import { ThemeContext } from '../context/themeContext';

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme?.(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    };

    useEffect(() => {
        document.body.className = theme as string;
    }, [theme]);

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    };
};