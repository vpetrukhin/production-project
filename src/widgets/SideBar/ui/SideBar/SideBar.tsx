import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LangSwitcher } from '@/widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher/ThemeSwitcher';
import { getUserInfo } from '@/entity/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSideBarItems } from '../../model/selectors/getSidebarItems';
import cls from './SideBar.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';


interface SideBarProps {
    className?: string;
}

export const SideBar = (props: SideBarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const user = useSelector(getUserInfo);
    const sidebarItems = useSelector(getSideBarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                className={cls.toggle_btn}
                theme={ButtonTheme.INVERTED_BACKGROUND}
                square
                size={ButtonSize.L}
                data-testid="sidebar-btn"
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <VStack align='start' gap='16' className={cls.items}>
                {user 
                    ? (
                        sidebarItems.map(item => (
                            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                        ))
                    )
                    : (
                        sidebarItems.filter(item => !item.onlyAuthorized).map(item => (
                            <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                        ))
                    )
                }
                {}
            </VStack>

            <HStack
                gap='16'
                justify='center'
                wrap='wrap'
                max
                className={cls.switchers}
            >
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </HStack>
        </div>
    );
};