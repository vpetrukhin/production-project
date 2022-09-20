import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import cls from "./Navbar.module.scss"


interface NavbarProps {
    className?: string;
}

export const NavBar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/about">About</AppLink>
                <AppLink to="/">Main</AppLink>
            </div>
        </div>
    )
}