import { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useScroll } from 'shared/lib/hooks/useScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEndCallback?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEndCallback } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

    useScroll({
        wrapperRef,
        targetRef,
        callback: onScrollEndCallback
    });

    return (
        <div ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={targetRef} />
        </div>
    );
};