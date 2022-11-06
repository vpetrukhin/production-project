import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleImageBlock } from 'entity/Article/model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <>
            <img
                className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
                src={block.src}
            />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </>
    );
};