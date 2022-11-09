import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    error?: boolean;
    align?: TextAlign;
    color?: TextColor;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        error,
        align = TextAlign.LEFT,
        color = TextColor.PRIMARY,
        size = TextSize.M
    } = props;

    return (
        <div className={classNames(cls.Text, {
            [cls.error]: error,
        }, [className, cls[align], cls[color], cls[size]])}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});