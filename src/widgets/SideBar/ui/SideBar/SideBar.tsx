import { useState } from 'react';
import { LangSwitcher } from '@/feutures/LangSwitcher';
import { ThemeSwitcher } from '@/feutures/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './SideBar.module.scss';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';

import { Button } from '@/shared/ui/deprecated/Button';
import { VStack, HStack } from '@/shared/ui/Stack';
import { SidebarRedesigned } from './SidebarRedesigned';
import { useSidebarItems } from '../../model/hooks/useSideBarItems';

interface SideBarProps {
    className?: string;
}

export const SideBar = (props: SideBarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItems = useSidebarItems();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <SidebarRedesigned
                    collapsed={collapsed}
                    sidebarItems={sidebarItems}
                    onToggle={onToggle}
                />
            }
            off={
                <div
                    data-testid="sidebar"
                    className={classNames(
                        cls.SideBar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        className={cls.toggle_btn}
                        theme={'inverted_background'}
                        square
                        size={'large'}
                        data-testid="sidebar-btn"
                        onClick={onToggle}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>

                    <VStack
                        align="start"
                        gap="16"
                        className={cls.items}
                    >
                        {sidebarItems.map((item) => (
                            <SidebarItem
                                key={item.path}
                                item={item}
                                collapsed={collapsed}
                            />
                        ))}
                    </VStack>

                    <HStack
                        gap="16"
                        justify="center"
                        wrap="wrap"
                        max
                        className={cls.switchers}
                    >
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </HStack>
                </div>
            }
        />
    );
};
