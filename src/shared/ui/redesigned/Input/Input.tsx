import React, {
    InputHTMLAttributes,
    memo,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
} from 'react';
import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { Text } from '../Text';
import { HStack } from '../../Stack';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
    'data-testid'?: string;
    isError?: boolean;
    error?: string;
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
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
        label,
        error,
        'data-testid': dataTestId = 'Input',
        isError,
        addonLeft,
        addonRight,
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

    const mods: Mode = useMemo<Mode>(
        () => ({
            [cls.readonly]: readonly,
        }),
        [readonly, addonLeft, addonRight],
    );

    return (
        <HStack
            gap="8"
            max
            className={className}
        >
            {label && (
                <span className={classNames(cls.label, mods, [])}>
                    {label}:
                </span>
            )}
            <div
                className={classNames(
                    cls.inputWrapper,
                    {
                        [cls.withAddonLeft]: Boolean(addonLeft),
                        [cls.withAddonRight]: Boolean(addonRight),
                    },
                    [],
                )}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    ref={ref}
                    placeholder={placeholder || ''}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    className={classNames(
                        cls.input,
                        {
                            [cls.error]: !!isError,
                        },
                        [],
                    )}
                    readOnly={readonly}
                    data-testid={dataTestId}
                    {...otherProps}
                />
                <div className={cls.addonRight}>{addonRight}</div>
            </div>
            {!!error && (
                <Text
                    error
                    text={error}
                />
            )}
        </HStack>
    );
});
