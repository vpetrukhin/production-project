import { useState, PropsWithChildren } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/themeContext';

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