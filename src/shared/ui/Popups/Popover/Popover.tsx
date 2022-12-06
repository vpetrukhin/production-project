import { ReactNode, PropsWithChildren } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../styles/popup.module.scss';
import { mappedDropdownDirectionsClasses } from '../styles/consts';

interface PopoverProps extends PropsWithChildren {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection
}

export const Popover = (props: PopoverProps) => {
    const { className, trigger, direction = 'bottomRight', children } = props;

    const popoverClasses = [className, popupCls.popup];

    return (
        <HPopover className={classNames('', {}, popoverClasses)}>
            <HPopover.Button className={popupCls.trigger} as='div'>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, [popupCls.dropdownContent ,mappedDropdownDirectionsClasses[direction]])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};