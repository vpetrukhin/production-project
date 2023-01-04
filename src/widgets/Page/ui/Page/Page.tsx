import { MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { getScrollStorageScrollByPath, ScrollStorageActions } from '@/feutures/scrollStorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useScroll } from '@/shared/lib/hooks/useScroll';
import cls from './Page.module.scss';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/Redux';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { TestProps } from '@/shared/types/tests';

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

    const dispatch = useAppDispatch();
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
        dispatch(ScrollStorageActions.setScroll(
            {
                scroll: e.currentTarget.scrollTop,
                path: pathname,
            }
        ));
    }, 500);

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