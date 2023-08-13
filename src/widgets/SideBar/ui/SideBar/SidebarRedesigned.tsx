import { classNames } from '@/shared/lib/classNames/classNames';
import { LangSwitcher } from '@/feutures/LangSwitcher';
import { ThemeSwitcher } from '@/feutures/ThemeSwitcher';
import { AppLogo } from '@/shared/layout';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemType } from '../../model/types/SidebarItem';
import cls from './SideBar.module.scss';
import Arrow from './arrow.svg';

interface SidebarRedesignedProps {
    className?: string;
    collapsed: boolean;
    onToggle: () => void;
    sidebarItems: SidebarItemType[];
}

export const SidebarRedesigned = (props: SidebarRedesignedProps) => {
    const { className, collapsed, onToggle, sidebarItems } = props;

    return (
        <VStack
            data-testid="sidebar"
            className={classNames(
                cls.SideBar_redesigned,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            align="start"
        >
            <AppLogo
                className={cls.appLogo}
                size={collapsed ? 32 : 50}
            />
            <VStack
                align="start"
                gap="16"
                max
                className={cls.items_redesigned}
            >
                {sidebarItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>

            <Icon
                className={cls.arrow}
                Svg={Arrow}
                data-testid="sidebar-btn"
                clickable
                onClick={onToggle}
            />

            <HStack
                gap="16"
                justify="center"
                align="center"
                wrap="wrap"
                className={cls.switchers_redesign}
            >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </HStack>
        </VStack>
    );
};
