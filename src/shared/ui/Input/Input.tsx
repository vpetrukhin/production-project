import React, { InputHTMLAttributes, memo, useEffect, useMemo, useRef } from 'react';
import { classNames, Mode } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>, 
    'value' | 'onChange'
>

export enum InputTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    theme?: InputTheme;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        placeholder,
        type = 'text',
        onChange,
        autoFocus,
        readonly,
        theme = InputTheme.PRIMARY,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mode = useMemo<Mode>(() => ({
        [cls.readonly]: readonly
    }), [readonly]);


    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            <span className={classNames(cls.label, mods, [cls[theme]])}>{placeholder}:</span>
            <input
                ref={ref}
                placeholder={placeholder || ''}
                type={type}
                value={value}
                onChange={handleChange}
                className={classNames(cls.input, {}, [cls[theme]])}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});