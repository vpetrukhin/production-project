import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    error?: boolean;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        error,
    } = props;

    return (
        <div className={classNames(cls.Text, {
            [cls.error]: error,
        }, [className])}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
});