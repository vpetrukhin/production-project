import { useTranslation } from 'react-i18next';
import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

type ButtonTheme = 
| 'clear'
| 'inverted_clear'
| 'outline'
| 'inverted_outline'
| 'outline_red'
| 'background'
| 'inverted_background';

type ButtonSize = 'medium' | 'large' | 'extralarge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    loading?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'clear',
        square,
        size = 'medium',
        loading,
        ...otherProps
    } = props;
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