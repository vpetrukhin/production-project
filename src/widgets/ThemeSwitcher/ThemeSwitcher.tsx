import { useTheme } from 'app/providers/theme/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import { Theme } from 'app/providers/theme/lib/themeContext';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={classNames('', {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
        </Button>
    );
};