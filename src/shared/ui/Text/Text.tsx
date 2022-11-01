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

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    error?: boolean;
    align?: TextAlign;
    color?: TextColor;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        error,
        align = TextAlign.LEFT,
        color = TextColor.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, {
            [cls.error]: error,
        }, [className, cls[align], cls[color]])}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
});