import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../Button/Button';
import { HStack } from '../../../Stack';
import { Text } from '../../Text/Text';
import cls from './Listbox.module.scss';
import popupCls from '../styles/popup.module.scss';
import { mappedDropdownDirectionsClasses } from '../styles/consts';
import CheckIcon from '../../../../assets/icons/check.svg';
import CaretDownIcon from '../../../../assets/icons/caretdown.svg';
import { Icon } from '../../Icon/Icon';
import { ListBoxItem } from '../types/listBox';
// TODO: do refactoring
export interface ListboxProps<T> {
    className?: string;
    items: ListBoxItem<T>[];
    readonly?: boolean;
    label?: string;
    value?: T;
    defaultValue?: string;
    direction?: DropdownDirection;
    error?: string;
    onChange?: (value: T) => void;
}
/**
 * @deprecated
 */
export const Listbox = <V extends string>(props: ListboxProps<V>) => {
    const {
        items,
        className,
        readonly,
        label,
        value,
        onChange,
        defaultValue = items[0].value,
        direction = 'bottomLeft',
        error,
    } = props;

    const listClasses = [className, mappedDropdownDirectionsClasses[direction]];

    return (
        <HStack gap="4">
            {label && <Text text={label + ':'} />}
            <HListbox
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.Listbox, {}, [popupCls.popup])}
            >
                <HListbox.Button
                    className={classNames(cls.button, {}, [popupCls.trigger])}
                    as="div"
                >
                    <Button
                        type="button"
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
                    <Icon
                        Svg={CaretDownIcon}
                        className={cls.caret}
                    />
                </HListbox.Button>
                <HListbox.Options
                    className={classNames(cls.list, {}, listClasses)}
                >
                    {items.map((item, index) => (
                        <HListbox.Option
                            key={index}
                            value={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                        [],
                                    )}
                                >
                                    {selected && <Icon Svg={CheckIcon} />}
                                    {item.content}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
            {error && (
                <Text
                    error
                    text={error}
                    size={'small'}
                />
            )}
        </HStack>
    );
};
