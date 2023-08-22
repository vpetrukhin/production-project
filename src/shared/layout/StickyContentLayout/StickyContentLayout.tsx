import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { ReactNode } from 'react';

interface StickyContentLayoutProps {
    className?: string;
    children: ReactNode;
    right?: ReactNode;
    left?: ReactNode;
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
    const { className, children, left, right } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.StickyContentLayout, {}, [className])}>
            <div className={cls.left}>{left}</div>
            <div className={cls.content}>{children}</div>
            <div className={cls.right}>{right}</div>
        </div>
    );
};
