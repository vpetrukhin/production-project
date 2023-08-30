import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { ArticleView, BlockType } from '../../model/const/articleConsts';
import { ArticleItemProps } from './ArticleItem';
import cls from './ArticleItem.module.scss';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getArticleDetailsPath } from '@/shared/config/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleTextBlock } from '../../model/types/article';
import { ArticalTextBlockComponent } from '../ArticalTextBlockComponent/ArticalTextBlockComponent';
import { ArticleSkeletonItem } from './ArticleSkeletonItem/ArticleSkeletonItem';
import { Card } from '@/shared/ui/deprecated/Card';

export const ArticleItemDeprecated = (props: ArticleItemProps) => {
    const {
        className,
        article,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    const types = (
        <Text
            className={cls.type}
            text={article.type.join(', ')}
            color="inverted"
        />
    );
    const views = (
        <HStack
            gap="4"
            className={cls.viewsWrapper}
        >
            <Text
                text={String(article.views)}
                color="inverted"
            />
            <Icon Svg={EyeIcon} />
        </HStack>
    );

    if (isLoading) {
        <ArticleSkeletonItem view={view} />;
    }

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === BlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <HStack
                        justify="between"
                        className={cls.header}
                    >
                        <HStack
                            gap="16"
                            className={cls.userWrapper}
                        >
                            <Avatar
                                size={33}
                                src={article.user.avatar}
                            />
                            <Text
                                text={article.user.username}
                                color="inverted"
                            />
                        </HStack>
                        <Text
                            text={article.createdAt}
                            color="inverted"
                        />
                    </HStack>
                    <Text
                        title={article.title}
                        color="inverted"
                    />
                    {types}
                    <AppImage
                        fallback={
                            <Skeleton
                                width={'100%'}
                                height={236}
                            />
                        }
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />
                    <ArticalTextBlockComponent
                        className={cls.text}
                        block={textBlock}
                    />
                    <HStack
                        justify="between"
                        className={cls.footer}
                    >
                        <AppLink
                            to={getArticleDetailsPath(article.id)}
                            target={target}
                        >
                            <Button theme={'outline'}>
                                {t('Читать далее')}...
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={getArticleDetailsPath(article.id)}
            className={classNames(cls.ArticleItem, {}, [className, cls[view]])}
            target={target}
        >
            <Card className={cls.card}>
                <div className={cls.imgWrapper}>
                    <AppImage
                        fallback={
                            <Skeleton
                                width={200}
                                height={236}
                            />
                        }
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />
                    <Text
                        className={cls.date}
                        text={article.createdAt}
                        color="inverted"
                    />
                </div>
                <HStack
                    justify="between"
                    className={cls.info}
                >
                    {types}
                    {views}
                </HStack>
                <Text
                    className={cls.title}
                    text={article.title}
                    color="inverted"
                />
            </Card>
        </AppLink>
    );
};
