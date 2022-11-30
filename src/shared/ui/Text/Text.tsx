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

    'data-testid'?: string
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        error,
        align = TextAlign.LEFT,
        color = TextColor.SECONDARY,
        size = TextSize.M,
        'data-testid': dataTestID = 'Text'
    } = props;

    return (
        <div className={classNames(cls.Text, {
            [cls.error]: error,
        }, [className, cls[align], cls[color], cls[size]])}>
            {title && 
                <div
                    className={cls.title}
                    data-testid={`${dataTestID}.Header`}
                >
                    {title}
                </div>
            }
            {text && 
                <p
                    className={cls.text}
                    data-testid={`${dataTestID}.Paragraph`}
                >
                    {text}
                </p>
            }
        </div>
    );
});