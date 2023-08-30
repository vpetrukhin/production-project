import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';
import { ArticleView, BlockType } from '../../model/const/articleConsts';
import { ArticleItemProps } from './ArticleItem';
import cls from './ArticleItem.module.scss';
import EyeIcon from '@/shared/assets/icons/eye-new.svg';
import { ArticleSkeletonItem } from './ArticleSkeletonItem/ArticleSkeletonItem';
import { ArticleTextBlock } from '../../model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getArticleDetailsPath } from '@/shared/config/const/router';
import { Button } from '@/shared/ui/redesigned/Button';

export const ArticleItemRedesigned = (props: ArticleItemProps) => {
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
        />
    );
    const views = (
        <HStack gap="4">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    );

    if (isLoading) {
        <ArticleSkeletonItem view={view} />;
    }

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === BlockType.TEXT,
        ) as ArticleTextBlock;

        const getTextFromTextBlock = (paragraphs: string | string[]) => {
            if (Array.isArray(paragraphs)) {
                return paragraphs.slice(0, 2).join(' ');
            } else {
                return paragraphs;
            }
        };

        return (
            <Card
                max
                className={classNames(cls.ArticleItemRedesigned, {}, [
                    className,
                    cls[view],
                ])}
                padding={'24'}
            >
                <VStack
                    max
                    gap="16"
                    align="start"
                >
                    <HStack
                        max
                        gap="16"
                        justify="start"
                    >
                        <Avatar
                            size={32}
                            src={article.user.avatar}
                        />
                        <Text
                            bold
                            text={article.user.username}
                        />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} />
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
                    {textBlock.paragraphs && (
                        <Text
                            className={cls.paragraph}
                            text={getTextFromTextBlock(textBlock.paragraphs)}
                        />
                    )}
                    <HStack
                        justify="between"
                        max
                    >
                        <AppLink
                            to={getArticleDetailsPath(article.id)}
                            target={target}
                        >
                            <Button variant={'outlined'}>
                                {t('Читать далее')}...
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            to={getArticleDetailsPath(article.id)}
            className={classNames(cls.ArticleItemRedesigned, {}, [
                className,
                cls[view],
            ])}
            target={target}
        >
            <Card className={cls.card}>
                <AppImage
                    fallback={
                        <Skeleton
                            width={200}
                            height={236}
                        />
                    }
                    className={cls.img}
                    src={article.img}
                />
                <VStack
                    max
                    align="start"
                    gap={'8'}
                    className={cls.content}
                >
                    <Text
                        title={article.title}
                        className={cls.title}
                    />
                    <HStack
                        justify="between"
                        max
                    >
                        <Text text={article.createdAt} />

                        {views}
                    </HStack>
                    <HStack
                        max
                        gap="4"
                        className={cls.userinfo}
                    >
                        <Avatar
                            size={32}
                            src={article.user.avatar}
                        />
                        <Text
                            bold
                            text={article.user.username}
                        />
                    </HStack>
                </VStack>
            </Card>
        </AppLink>
    );
};
