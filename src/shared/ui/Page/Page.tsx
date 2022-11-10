import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
}

export const Page = (props: PageProps) => {
    const { className, children } = props;

    return (
        <div className={classNames(cls.Page, {}, [className])}>
            {children}
        </div>
    );
};