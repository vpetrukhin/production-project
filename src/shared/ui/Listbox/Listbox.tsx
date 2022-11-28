import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { Button, ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';
import { Text } from '../Text/Text';
import cls from './Listbox.module.scss';
import CheckIcon from '../../assets/icons/check.svg';

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
    onChange?: (value: T) => void;
    direction?: DropdownDirection;
}

const mappedDropdownDirectionsClasses: Record<DropdownDirection, string> = {
    ['topLeft']: cls.topLeft,
    ['topRight']: cls.topRight,
    ['bottomLeft']: cls.bottomLeft,
    ['bottomRight']: cls.bottomRight,
};

export const Listbox = <V extends string>(props: ListboxProps<V>) => {
    const { items, className, readonly, label, value, onChange, defaultValue, direction = 'bottomLeft' } = props;

    const listClasses = [
        className,
        mappedDropdownDirectionsClasses[direction]
    ];

    return (
        <HStack gap='4'>
            {label && <Text text={label} />}
            <HListbox
                as='div'
                value={value}
                onChange={onChange}
                className={classNames(cls.CustomListbox, {}, [])}
            >
                <HListbox.Button className={classNames(cls.button, {}, [])} as='div'>
                    <Button disabled={readonly} theme={ButtonTheme.OUTLINE}>{value ?? defaultValue}</Button>
                </HListbox.Button>
                <HListbox.Options className={classNames(cls.list, {}, listClasses)}>
                    {items.map((item, index) => (
                        <HListbox.Option
                            key={index}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {( {active, selected} ) => (
                                <li className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                }, [])}>
                                    {selected && <CheckIcon />}
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