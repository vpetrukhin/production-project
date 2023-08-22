import { useTranslation } from 'react-i18next';
import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

// type ButtonSize = 'medium' | 'large' | 'extralarge';
type ButtonVariant = 'outlined' | 'filled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    loading?: boolean;
    max?: boolean;
    variant?: ButtonVariant;
    isBorderRadius?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        loading,
        max,
        variant = 'outlined',
        isBorderRadius = true,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <button
            className={classNames(
                cls.Button,
                { [cls.max]: max, [cls.borderRadius]: isBorderRadius },
                [className, cls[variant]],
            )}
            {...otherProps}
        >
            {loading ? `${t('Загрузка')}...` : children}
        </button>
    );
});
