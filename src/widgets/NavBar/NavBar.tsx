import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavBar.module.scss';


export interface NavbarProps {
    className?: string;
}

export const NavBar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};