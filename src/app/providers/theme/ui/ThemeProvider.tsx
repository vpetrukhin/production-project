import { useState, PropsWithChildren } from 'react';
import { ThemeContext } from '@/shared/lib/context/themeContext';
import { Theme } from '@/shared/config/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/config/const/localStorage';

export const ThemeProvider  = ({ children }: PropsWithChildren) => {
    const defaultThemeValue: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(defaultThemeValue);

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
};