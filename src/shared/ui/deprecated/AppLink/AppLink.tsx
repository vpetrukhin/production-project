import { FC, forwardRef, Ref } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'inverted';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

/**
 * @deprecated
 */
export const AppLink: FC<AppLinkProps> = forwardRef<
    FC<AppLinkProps>,
    AppLinkProps
>((props, ref) => {
    const { className, children, to, theme = 'primary', ...otherProps } = props;

    return (
        <Link
            ref={ref as Ref<HTMLAnchorElement>}
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
