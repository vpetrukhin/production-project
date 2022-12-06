import { PropsWithChildren } from 'react';
import { useTheme } from 'app/providers/theme/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps extends PropsWithChildren {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

export const Drawer = (props: DrawerProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const {theme} = useTheme();

    const isMounted = useModal({
        isOpen, onClose
    });

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {
                [cls.open]: isOpen,
            }, [className, theme, 'app_drawer'])}>
                <Overlay onClose={onClose} />
                <div className={classNames(cls.content, {}, [className])}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};