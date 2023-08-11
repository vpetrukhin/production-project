import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (
    props: ArticleImageBlockComponentProps,
) => {
    const { className, block } = props;

    return (
        <>
            <img
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
                src={block.src}
            />
            {block.title && (
                <Text
                    text={block.title}
                    align={'center'}
                />
            )}
        </>
    );
};
