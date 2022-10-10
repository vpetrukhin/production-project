import { createContext, Dispatch, SetStateAction } from 'react';

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme'
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface IThemeContext {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<Partial<IThemeContext>>({});