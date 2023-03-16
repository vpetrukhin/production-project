import { TextareaHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '../Stack';
import cls from './TextArea.module.scss';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    label?: string;
}

export const TextArea = (props: TextAreaProps) => {
    const { className, label, ...otherProps } = props;

    return (
        <VStack
            className={classNames(cls.root, {}, [className])}
            align="start"
            gap="4"
            max
        >
            {label && <span className={cls.label}>{label}</span>}
            <textarea
                cols={100}
                rows={5}
                className={cls.textarea}
                {...otherProps}
            />
        </VStack>
    );
};
