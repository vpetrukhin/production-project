import { useState, PropsWithChildren, useEffect } from 'react';
import { ThemeContext } from '@/shared/lib/context/themeContext';
import { Theme } from '@/shared/config/const/theme';
import { useGetJsonSettings } from '@/entity/User';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const { theme: defaultThemeValue } = useGetJsonSettings();

    const [theme, setTheme] = useState<Theme>(defaultThemeValue || Theme.LIGHT);

    useEffect(() => {
        defaultThemeValue && setTheme(defaultThemeValue);
    }, [defaultThemeValue]);

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                setTheme: setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
