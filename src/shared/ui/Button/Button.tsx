import { useTranslation } from 'react-i18next';
import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';


export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    INVERTED_BACKGROUND = 'inverted_background',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    loading?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const { className, children, theme = ButtonTheme.CLEAR, square, size = ButtonSize.M, loading, ...otherProps } = props;
    const { t } = useTranslation();

    return (
        <button
            className={classNames(
                cls.Button,
                { [cls.square]: square },
                [className, cls[theme], cls[size]]
            )}
            {...otherProps}
        >
            {loading ? `${t('Загрузка')}...` : children}
        </button>
    );
});