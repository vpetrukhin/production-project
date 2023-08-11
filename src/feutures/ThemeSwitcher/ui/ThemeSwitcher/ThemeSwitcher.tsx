import { useTheme } from '@/shared/lib/hooks/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import DarkTheme from '@/shared/assets/icons/theme-dark.svg';
import LightTheme from '@/shared/assets/icons/theme-light.svg';
import SwapTheme from './SwapTheme.svg';
import { Theme } from '@/shared/config/const/theme';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { saveJsonSettings } from '@/entity/User';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Button } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const { theme, toggleTheme } = useTheme();

    const handleToggleTheme = useCallback(() => {
        toggleTheme((newTheme) =>
            dispatch(saveJsonSettings({ theme: newTheme })),
        );
    }, [dispatch, toggleTheme]);

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <Button
                    className={classNames('', {}, [className])}
                    onClick={handleToggleTheme}
                >
                    <SwapTheme />
                </Button>
            }
            off={
                <Button
                    className={classNames('', {}, [className])}
                    onClick={handleToggleTheme}
                >
                    <Icon
                        Svg={theme === Theme.DARK ? DarkTheme : LightTheme}
                        color="inverted"
                        width={40}
                        height={40}
                    />
                </Button>
            }
        />
    );

    // return (
    //     <Button
    //         className={classNames('', {}, [className])}
    //         onClick={handleToggleTheme}
    //     >
    //         {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
    //     </Button>
    // );
};
