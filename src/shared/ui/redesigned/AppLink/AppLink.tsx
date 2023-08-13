import { FC, forwardRef, Ref } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends NavLinkProps {
    className?: string;
    activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = forwardRef<
    FC<AppLinkProps>,
    AppLinkProps
>((props, ref) => {
    const {
        className,
        children,
        to,
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            ref={ref as Ref<HTMLAnchorElement>}
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [activeClassName]: isActive }, [
                    className,
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
