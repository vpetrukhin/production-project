import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';
import { ReactElement } from 'react';

interface MainLayoutProps {
    className?: string;
    sidebar: ReactElement;
    content: ReactElement;
    header: ReactElement;
    toolbar: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, content, header, toolbar, sidebar } = props;

    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
