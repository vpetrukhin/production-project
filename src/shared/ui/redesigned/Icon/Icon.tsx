import { SVGProps, FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
    disabled?: boolean;
}

interface IconNonClickableProps extends IconBaseProps {
    clickable?: false;
}

interface IconClickableProps extends IconBaseProps {
    clickable?: true;
    onClick: () => void;
}

type IconProps = IconClickableProps | IconNonClickableProps;

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        width = 16,
        height = 16,
        disabled = false,
        clickable,
        ...otherProps
    } = props;

    const svg = (
        <Svg
            className={classNames(cls.Icon, { [cls.disabled]: disabled }, [
                className,
            ])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                className={cls.button}
                onClick={props.onClick}
                style={{ width, height }}
                disabled={disabled}
            >
                {svg}
            </button>
        );
    }

    return svg;
};
