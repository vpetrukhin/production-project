import React, { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '../../Overlay/Overlay';
import { Portal } from '../../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
    lazy?: boolean;
}

/**
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
    const { className, isOpen, onClose, children, lazy } = props;

    const isMounted = useModal({
        isOpen,
        onClose,
    });

    const handleClose = () => {
        if (onClose) onClose();
    };

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const mods: Record<string, boolean | string> = {
        [cls.is_open]: isOpen,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    'app_modal',
                ])}
            >
                <Overlay onClose={handleClose} />
                <div
                    className={cls.content}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};
