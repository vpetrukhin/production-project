import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './SideBar.module.scss';


interface SideBarProps {
    className?: string;
}


export const SideBar = (props: SideBarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {t} = useTranslation();

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
                <AppLink to="/" className={cls.item}>
                    <MainIcon />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink to="/about" className={cls.item}>
                    <AboutIcon />
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};