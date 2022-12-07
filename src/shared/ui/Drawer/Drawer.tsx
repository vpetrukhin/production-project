import { PropsWithChildren, useCallback, useEffect } from 'react';
import { useTheme } from '@/app/providers/theme/lib/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { AnimationProvider, useAnimationContext } from '@/shared/lib/ui/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps extends PropsWithChildren {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const height = window.innerHeight * 0.6;

const DrawerContent = (props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const {theme} = useTheme();

    const { Gesture, Spring } = useAnimationContext();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const handleOpen = useCallback(() => {
        api.start({
            y: 0,
            immediate: false,
        });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            handleOpen();
        }
    }, [handleOpen, isOpen]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose
        });
    };

    const bind = Gesture.useDrag(({
        last,
        velocity: [, vy],
        direction: [, dy],
        movement: [, my],
        cancel,
    }) => {
        if (my < -70) cancel();

        if (last) {
            my > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : handleOpen();
        } else {
            api.start({ y: my, immediate: true });
        }
    },
    {
        from: () => [0, y.get()],
        filterTaps: true,
        bounds: { top: 0 },
        rubberband: true
    }
    );

    const isMounted = useModal({
        isOpen, onClose
    });

    if (lazy && !isMounted) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {
                [cls.open]: isOpen,
            }, [className, theme, 'app_drawer'])}>
                <Overlay onClose={close} />
                <Spring.a.div
                    className={classNames(cls.content, {}, [className])}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

const DrawerAsync = (props: DrawerProps) => {
    const { isLoaded } = useAnimationContext();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
};
