import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from 'react';

type GestureType = typeof import('@use-gesture/react');
type SpringType = typeof import ('@react-spring/web');

interface AnimationContext {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContext>({});

export const useAnimationContext = () => useContext(AnimationContext) as Required<AnimationContext>;

const getAsyncAnimationLibs = () => {
    return Promise.all([
        import('@use-gesture/react'),
        import ('@react-spring/web')
    ]);
};

export const AnimationProvider = ({ children }: PropsWithChildren ) => {
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        getAsyncAnimationLibs().then(([Gesture, Spring]) => {
            GestureRef.current = Gesture;
            SpringRef.current = Spring;
            setIsLoaded(true);
        }).catch(e => {
            console.log(e);
        });
    }, []);

    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider
            value={value}
        >
            {children}
        </AnimationContext.Provider>
    );
};