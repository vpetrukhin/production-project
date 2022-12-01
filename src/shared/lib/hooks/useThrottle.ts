import { useCallback, useRef, MutableRefObject } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const throttleRef = useRef(false) as MutableRefObject<boolean>;

    return useCallback((...arg: any[]) => {
        if (!throttleRef.current) {
            callback(...arg);
            throttleRef.current = true;

            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
};