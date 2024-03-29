import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextAlign = 'left' | 'right' | 'center';
type TextSize = 'small' | 'medium' | 'large';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    error?: boolean;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        error,
        align = 'left',
        size = 'medium',
        bold,
        'data-testid': dataTestID = 'Text',
    } = props;

    return (
        <div
            className={classNames(
                cls.Text,
                {
                    [cls.error]: error,
                    [cls.bold]: bold,
                },
                [className, cls[align], cls[size]],
            )}
        >
            {title && (
                <div
                    className={cls.title}
                    data-testid={`${dataTestID}.Header`}
                >
                    {title}
                </div>
            )}
            {text && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestID}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
