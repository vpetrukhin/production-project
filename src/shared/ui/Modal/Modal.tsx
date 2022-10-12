import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';


interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
    lazy?: boolean;
}
export const Modal = (props: ModalProps) => {
    const { className, isOpen, onClose, children, lazy } = props;

    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.code === 'Escape' && onClose) {
            onClose();
        }
    }, []);
    

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
    
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen]);
    

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
            <div className={classNames(cls.Modal, mods, [className, 'app_modal'])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};