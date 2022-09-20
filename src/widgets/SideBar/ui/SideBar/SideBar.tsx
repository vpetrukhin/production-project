import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import cls from './SideBar.module.scss';


interface SideBarProps {
    className?: string;
}


export const SideBar = (props: SideBarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* LangSwitcer */}
            </div>
        </div>
    )
}