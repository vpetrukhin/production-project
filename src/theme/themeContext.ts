import { createContext, Dispatch, SetStateAction } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const LOCAL_STORAGE_THEME_KEY: string = 'theme';

export interface IThemeContext {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<Partial<IThemeContext>>({})