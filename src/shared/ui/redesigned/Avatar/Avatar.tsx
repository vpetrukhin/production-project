import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import AvatarImg from '../../../assets/icons/avatar.svg';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';
import { AppImage } from '../../AppImage';

interface AvatarProps {
    className?: string;
    size?: number;
    src?: string;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, alt, size = 100 } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border={'50%'}
        />
    );
    const errorFallback = <Icon Svg={AvatarImg} />;

    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};
