import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { sidebarItems } from '../../model/items';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import cls from './SideBar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getUserInfo } from 'entity/User';
import { useSelector } from 'react-redux';


interface SideBarProps {
    className?: string;
}

export const SideBar = (props: SideBarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const user = useSelector(getUserInfo);

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

            <div className={cls.items}>
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
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};