import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
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
                <ToggleFeatureComponent
                    name="isRedesignEnable"
                    on={
                        <Text
                            text={block.title}
                            align={'center'}
                        />
                    }
                    off={
                        <TextDeprecated
                            text={block.title}
                            align={'center'}
                        />
                    }
                />
            )}
        </>
    );
};
