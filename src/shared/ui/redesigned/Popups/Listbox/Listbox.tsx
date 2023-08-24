import { Fragment, ReactNode } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '../../Button/Button';
import { HStack, VStack } from '../../../Stack';
import { Text } from '../../Text/Text';
import cls from './Listbox.module.scss';
import popupCls from '../styles/popup.module.scss';
import { mappedDropdownDirectionsClasses } from '../styles/consts';
import CheckIcon from '../../../../assets/icons/check.svg';
import ArrowtDownIcon from '../../../../assets/icons/arrowDown.svg';
import { Icon } from '../../Icon/Icon';
import { ListBoxItem } from '../types/listBox';
import { Flex } from '../../../Stack/Flex/Flex';
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
    disabled?: boolean;
    flexDirection?: 'row' | 'column';
    onChange?: (value: T) => void;
}

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
        disabled,
        flexDirection = 'column',
    } = props;

    const listClasses = [className, mappedDropdownDirectionsClasses[direction]];

    const selectedItem = items.find((item) => item.value === value);

    return (
        <Flex
            direction={flexDirection}
            gap="4"
        >
            {label && <Text text={label + ':'} />}
            <HListbox
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.Listbox, {}, [popupCls.popup])}
                disabled={disabled}
            >
                <HListbox.Button
                    className={classNames(
                        cls.button,
                        { [cls.disabled]: disabled },
                        [popupCls.trigger],
                    )}
                    as="div"
                >
                    <Button
                        type="button"
                        variant="filled"
                        disabled={readonly}
                    >
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                    <Icon
                        Svg={ArrowtDownIcon}
                        className={cls.caret}
                        width={12}
                        height={7}
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
                                            [popupCls.selected]: selected,
                                        },
                                        [],
                                    )}
                                >
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
        </Flex>
    );
};
