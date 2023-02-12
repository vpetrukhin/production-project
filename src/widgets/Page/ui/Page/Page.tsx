import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/Redux';
import { getScrollStorageScrollByPath, useScrollStorageActions } from '@/feutures/scrollStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useScroll } from '@/shared/lib/hooks/useScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { TestProps } from '@/shared/types/tests';
import cls from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEndCallback?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, 'data-testid': dataTestId, onScrollEndCallback } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const targetRef = useRef() as MutableRefObject<HTMLDivElement>;

    const { pathname } = useLocation();

    const { setScroll } = useScrollStorageActions();
    const scroll = useSelector((state: StateSchema) => getScrollStorageScrollByPath(state, pathname));

    useScroll({
        wrapperRef,
        targetRef,
        callback: onScrollEndCallback
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scroll;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        setScroll(
            {
                scroll: e.currentTarget.scrollTop,
                path: pathname,
            }
        );
    }, 1000);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            data-testid={dataTestId}
        >
            {children}
            <div ref={targetRef} />
        </section>
    );
};