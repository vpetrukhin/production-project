import { SVGProps, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type IconColor = 'primary' | 'inverted';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>
    size?: number;
    color?: IconColor
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        color = 'primary',
        ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(cls.Icon, {}, [className, cls[color]])}
            {...otherProps}
        />
    );
};