import { FC, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

export const ThemeProvider: FC = ({ children }) => {
    const defaultThemeValue: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(defaultThemeValue);

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: setTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}