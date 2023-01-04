import { MutableRefObject } from 'react';
import { useInitialEffect } from './useInitialEffect';

export interface UseScrollProps {
    targetRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
    callback?: () => void;
}

export type UseScrollResult = []

export const useScroll = (props: UseScrollProps) => {
    const { callback, targetRef, wrapperRef } = props;

    useInitialEffect(() => {
        const target = targetRef.current;

        // функция обратного вызова
        const onCallback: IntersectionObserverCallback = ([entry], observer) => {
            if (entry.isIntersecting) {
                callback?.();
            }
        };

        // наблюдатель
        const observer = new IntersectionObserver(onCallback, {
            root: wrapperRef.current,
            rootMargin: '0px',
        });

        observer.observe(target);

        return () => {
            // reset IA
            if (observer) {
                observer.unobserve(target);
            }
        };
    }, [callback, targetRef, wrapperRef]);
};