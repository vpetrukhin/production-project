import React, { InputHTMLAttributes, memo, useEffect, useMemo, useRef } from 'react';
import { classNames, Mode } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>, 
    'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
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
        <div className={classNames(cls.wrapper, mods, [className])}>
            <span className={cls.label}>{placeholder}:</span>
            <input
                ref={ref}
                placeholder={placeholder || ''}
                type={type}
                value={value}
                onChange={handleChange}
                className={cls.input}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});