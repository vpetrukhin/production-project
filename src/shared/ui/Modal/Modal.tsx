import React, { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { toggleFeature } from '@/shared/lib/featureFlags';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
    lazy?: boolean;
}

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
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    'app_modal',
                    toggleFeature({
                        name: 'isRedesignEnable',
                        on: () => cls.modalNew,
                        off: () => cls.modalOld,
                    }),
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
