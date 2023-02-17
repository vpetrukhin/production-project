import React, { InputHTMLAttributes, memo, useEffect, useMemo, useRef } from 'react';
import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { Text } from '../Text';
import { HStack } from '../Stack';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>, 
    'value' | 'onChange'
>

type InputTheme = 'primary' | 'inverted';

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    theme?: InputTheme;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
    'data-testid'?: string;
    isError?: boolean;
    error?: string;
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
        theme = 'primary',
        label,
        error,
        'data-testid': dataTestId = 'Input',
        isError,
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
        <HStack gap='8' max className={className}>
            {label && <span className={classNames(cls.label, mods, [cls[theme]])}>{label}:</span>}
            <input
                ref={ref}
                placeholder={placeholder || ''}
                type={type}
                value={value}
                onChange={handleChange}
                className={classNames(cls.input, {
                    [cls.error]: !!isError,
                }, [cls[theme]])}
                readOnly={readonly}
                data-testid={dataTestId}
                {...otherProps}
            />
            {!!error && <Text error text={error} />}
        </HStack>
    );
});