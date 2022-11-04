import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SceletonProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    border?: number | string;
}

export const Sceleton = memo((props: SceletonProps) => {
    const { className, border, height = 100, width = 100 } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});