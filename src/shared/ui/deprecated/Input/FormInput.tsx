import { forwardRef, InputHTMLAttributes, LegacyRef, useMemo } from 'react';
import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '../Stack';
import { Text } from '../Text';
import cls from './Input.module.scss';

type InputTheme = 'primary' | 'inverted';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    theme?: InputTheme;
    autofocus?: boolean;
    readonly?: boolean;
    label?: string;
    'data-testid'?: string;
    error?: string;
}

/**
 * Поле ввода с дефолтными пропсами
 */
export const FormInput = forwardRef((props: FormInputProps, ref) => {
    const {
        className,
        placeholder,
        type = 'text',
        autoFocus,
        readonly,
        theme = 'primary',
        label,
        error,
        'data-testid': dataTestId = 'Input',
        ...otherProps
    } = props;

    const mods: Mode = useMemo<Mode>(
        () => ({
            [cls.readonly]: readonly,
        }),
        [readonly],
    );

    return (
        <VStack max>
            <HStack
                gap="8"
                max
                className={className}
            >
                {label && (
                    <span className={classNames(cls.label, mods, [cls[theme]])}>
                        {label}:
                    </span>
                )}
                <input
                    ref={ref as LegacyRef<HTMLInputElement>}
                    placeholder={placeholder || ''}
                    type={type}
                    className={classNames(
                        cls.input,
                        {
                            [cls.error]: !!error,
                        },
                        [cls[theme]],
                    )}
                    readOnly={readonly}
                    data-testid={dataTestId}
                    {...otherProps}
                />
            </HStack>

            <Text
                className={classNames(cls.errorText, {
                    [cls.errorActive]: error,
                })}
                error
                text={error}
                size="small"
            />
        </VStack>
    );
});
