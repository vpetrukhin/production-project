import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClose: () => void
}

export const Overlay = (props: OverlayProps) => {
    const { className, onClose } = props;

    return (
        <div className={classNames(cls.Overlay, {}, [className])} onClick={onClose} />
    );
};