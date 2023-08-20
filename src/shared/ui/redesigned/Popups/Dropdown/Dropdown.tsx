import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '../../AppLink/AppLink';
import { mappedDropdownDirectionsClasses } from '../styles/consts';
import cls from './Dropdown.module.scss';
import popupCls from '../styles/popup.module.scss';
// TODO: do refactoring

export interface DropdownItem {
    content: string;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: DropdownItem[];
    direction?: DropdownDirection;
}
/**
 * @deprecated
 */
export const Dropdown = (props: DropdownProps) => {
    const { className, trigger, items, direction = 'bottomRight' } = props;

    const listClasses = [
        popupCls.dropdownContent,
        mappedDropdownDirectionsClasses[direction],
    ];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupCls.popup,
            ])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items
                as="div"
                className={classNames(cls.list, {}, listClasses)}
            >
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            disabled={item.disabled}
                            onClick={item?.onClick}
                            className={classNames(cls.item, {
                                [popupCls.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={index}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={index}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
