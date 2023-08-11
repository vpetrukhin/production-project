import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './Code.module.scss';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { useCallback } from 'react';
import { Icon } from '../Icon/Icon';

interface CodeProps {
    className?: string;
    text: string;
}
/**
 * @deprecated
 */
export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                className={cls.copyBtn}
                onClick={onCopy}
            >
                <Icon Svg={CopyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
};
