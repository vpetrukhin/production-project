import { useCallback, useRef, MutableRefObject } from 'react';

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timer = useRef(false) as MutableRefObject<any>;

    return useCallback((...arg) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...arg);
        }, delay);
    }, [callback, delay]);
};