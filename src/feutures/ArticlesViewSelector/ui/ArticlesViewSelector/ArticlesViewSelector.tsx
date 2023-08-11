import { ArticleView } from '@/entity/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesViewSelector.module.scss';
import BlockIcon from '@/shared/assets/icons/blocks.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { Button } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack } from '@/shared/ui/deprecated/Stack';

interface ArticlesViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewChange?: (newView: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: BlockIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticlesViewSelector = (props: ArticlesViewSelectorProps) => {
    const { className, view, onViewChange } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewChange?.(newView);
    };

    return (
        <HStack
            gap="4"
            className={classNames(cls.ArticlesViewSelector, {}, [className])}
        >
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    className={classNames(cls.button, {
                        [cls.notSelected]: view !== viewType.view,
                    })}
                >
                    {
                        <Icon
                            Svg={viewType.icon}
                            width={24}
                            height={24}
                        />
                    }
                </Button>
            ))}
        </HStack>
    );
};
