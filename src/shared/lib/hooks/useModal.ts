import { useState, useEffect, useCallback } from 'react';

interface UseModalProps {
    isOpen: boolean;
    onClose?: () => void;
}

export function useModal({ isOpen, onClose }: UseModalProps) {

    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) setIsMounted(true);
    }, [isOpen]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.code === 'Escape' && onClose) {
            onClose();
        }
    }, [onClose]);


    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return isMounted;
}