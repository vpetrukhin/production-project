import { Theme } from '@/shared/config/const/theme';
import { createContext, Dispatch, SetStateAction } from 'react';

export interface IThemeContext {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<Partial<IThemeContext>>({});