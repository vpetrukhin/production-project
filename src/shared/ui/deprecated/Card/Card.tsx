import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type CardTheme = 'normal' | 'light' | 'outline';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}
/**
 * @deprecated
 */
export const Card = (props: CardProps) => {
    const { className, children, theme = 'normal', max, ...otherProps } = props;

    return (
        <div
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                },
                [className, cls[theme]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};
