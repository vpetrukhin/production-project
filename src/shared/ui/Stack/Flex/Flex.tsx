import { ReactNode } from 'react';
import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

type FlexAlign = 'start' | 'center' | 'end';
type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '24' | '32';
type FlexWrap = 'wrap' | 'nowrap';

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignstart,
    center: cls.aligncenter,
    end: cls.alignend,
};

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifystart,
    center: cls.justifycenter,
    end: cls.justifyend,
    between: cls.justifybetween,
    around: cls.justifyaround,
};

const directionClasses: Record<FlexDirection, string> = {
    column: cls.directioncolumn,
    row: cls.directionrow,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

const wrapClasses: Record<FlexWrap, string> = {
    nowrap: cls.nowrap,
    wrap: cls.wrap,
};

export interface FlexProps {
    className?: string;
    children: ReactNode;
    align?: FlexAlign;
    justify?: FlexJustify;
    direction?: FlexDirection;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        align = 'center',
        justify = 'start',
        direction = 'row',
        gap,
        max,
        wrap = 'nowrap',
        children,
        ...otherProps
    } = props;

    const classes = [
        className,
        alignClasses[align],
        justifyClasses[justify],
        directionClasses[direction],
        wrapClasses[wrap],
        gap && gapClasses[gap],
    ];

    const mods: Mode = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.Flex, mods, classes)}
            {...otherProps}
        >
            {children}
        </div>
    );
};
