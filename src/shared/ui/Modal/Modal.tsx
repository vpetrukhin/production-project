import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';


interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
}
export const Modal = (props: ModalProps) => {
    const { className, isOpen, onClose, children } = props;

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

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};