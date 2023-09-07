import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '../deprecated/Button/Button';
import cls from './Code.module.scss';
import CopyIconOld from '@/shared/assets/icons/copy.svg';
import CopyIconNew from '@/shared/assets/icons/newCopy.svg';
import { useCallback } from 'react';
import { Icon as IconDeprecated } from '../deprecated/Icon/Icon';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Icon } from '../redesigned/Icon';

interface CodeProps {
    className?: string;
    text: string;
}
export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <Icon
                        Svg={CopyIconNew}
                        clickable
                        onClick={onCopy}
                        className={cls.copyBtn}
                        width={32}
                        height={32}
                    />
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <ButtonDeprecated
                        className={cls.copyBtn}
                        onClick={onCopy}
                    >
                        <IconDeprecated Svg={CopyIconOld} />
                    </ButtonDeprecated>
                    <code>{text}</code>
                </pre>
            }
        />
    );
};
