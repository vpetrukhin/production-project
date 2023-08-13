import { classNames } from '@/shared/lib/classNames/classNames';
import { PropsWithChildren } from 'react';
import CloseIcon from '@/shared/assets/icons/close.svg';
import cls from './ArticleBlockEditorItem.module.scss';
import { Button } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack } from '@/shared/ui/Stack';

interface ArticleBlockEditorItemProps extends PropsWithChildren {
    className?: string;
    onRemove: () => void;
}

export const ArticleBlockEditorItem = (props: ArticleBlockEditorItemProps) => {
    const { className, children, onRemove } = props;

    return (
        <HStack
            className={classNames(cls.ArticleBlockEditorItem, {}, [className])}
            justify="between"
            gap="8"
            align="start"
            max
        >
            {children}
            <Button
                className={cls.close}
                theme="clear"
                square
                onClick={onRemove}
            >
                <Icon Svg={CloseIcon} />
            </Button>
        </HStack>
    );
};
