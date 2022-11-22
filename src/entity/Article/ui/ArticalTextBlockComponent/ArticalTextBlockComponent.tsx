import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticalTextBlockComponent.module.scss';

interface ArticalTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticalTextBlockComponent = (props: ArticalTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticalTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} />}
            {block.paragraphs.map(paragraph => (
                <Text className={cls.paragraph} key={paragraph} text={paragraph} />
            ))}
        </div>
    );
};