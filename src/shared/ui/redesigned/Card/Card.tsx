import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type CardTheme = 'normal';
type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
    padding?: CardPadding;
}

const CardPaddingMapClass: Record<CardPadding, string> = {
    '0': 'p-0',
    '8': 'p-8',
    '16': 'p-16',
    '24': 'p-24',
};

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = 'normal',
        max,
        padding = '0',
        ...otherProps
    } = props;

    const paddingClass = CardPaddingMapClass[padding];

    return (
        <div
            className={classNames(
                cls.Card,
                {
                    [cls.max]: max,
                },
                [className, cls[theme], cls[paddingClass]],
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};
