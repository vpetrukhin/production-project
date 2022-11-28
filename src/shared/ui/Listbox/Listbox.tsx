import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Listbox.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text/Text';

export interface ListBoxItem<T> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListboxProps<T> {
    className?: string;
    items: ListBoxItem<T>[];
    readonly?: boolean;
    label?: string;
    value?: T;
    defaultValue?: string;
    onChange?: (value: T) => void
}

export const Listbox = <V extends string>(props: ListboxProps<V>) => {
    const { items, className, readonly, label, value, onChange, defaultValue } = props;

    return (
        <HStack gap='4'>
            {label && <Text text={label} />}
            <HListbox
                as='div'
                value={value}
                onChange={onChange}
                className={classNames(cls.CustomListbox, {}, [className])}
            >
                <HListbox.Button className={classNames(cls.button, {}, [])} as='div'>
                    <Button disabled={readonly} theme={ButtonTheme.OUTLINE}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options className={cls.list}>
                    {items.map((item, index) => (
                        <HListbox.Option
                            key={index}
                            value={item.content}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {( active: boolean, selected: boolean ) => (
                                <li className={classNames(cls.item, {
                                    [cls.active]: selected,
                                }, [])}>
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};