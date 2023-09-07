import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticalTextBlockComponent.module.scss';

interface ArticalTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticalTextBlockComponent = (
    props: ArticalTextBlockComponentProps,
) => {
    const { className, block } = props;

    return (
        <div
            className={classNames(cls.ArticalTextBlockComponent, {}, [
                className,
            ])}
        >
            {block.title && (
                <ToggleFeatureComponent
                    name="isRedesignEnable"
                    on={<Text title={block.title} />}
                    off={
                        <TextDeprecated
                            title={block.title}
                            color="inverted"
                        />
                    }
                />
            )}
            {Array.isArray(block.paragraphs)
                ? block.paragraphs.map((paragraph) => (
                      <ToggleFeatureComponent
                          key={paragraph}
                          name="isRedesignEnable"
                          on={
                              <Text
                                  className={cls.paragraph}
                                  key={paragraph}
                                  text={paragraph}
                              />
                          }
                          off={
                              <TextDeprecated
                                  className={cls.paragraph}
                                  key={paragraph}
                                  text={paragraph}
                                  color="inverted"
                              />
                          }
                      />
                  ))
                : null}
        </div>
    );
};
