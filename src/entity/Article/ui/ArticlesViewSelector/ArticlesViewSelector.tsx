import { ArticleView } from 'entity/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesViewSelector.module.scss';
import BlockIcon from 'shared/assets/icons/blocks.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { Button } from 'shared/ui/Button/Button';

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
    }
];

export const ArticlesViewSelector = (props: ArticlesViewSelectorProps) => {
    const { className, view, onViewChange } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewChange?.(newView);
    };

    return (
        <div className={classNames(cls.ArticlesViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    className={classNames(cls.button, { [cls.notSelected]: view !== viewType.view })}
                >
                    {<viewType.icon />}
                </Button>
            ))}
        </div>
    );
};