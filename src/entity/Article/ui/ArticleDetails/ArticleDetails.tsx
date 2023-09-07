import { useTranslation } from 'react-i18next';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import {
    useArticleData,
    useArticleError,
    useArticleIsLoading,
} from '../../model/selectors/getArticle/getArticle';
import { ArticleReducer } from '../../model/slice/ArticleSlice';
import cls from './ArticleDetails.module.scss';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { VStack, HStack } from '@/shared/ui/Stack';
import { renderArticleBlocks } from './renderArticleBlocks';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';

interface ArticleDetailsProps {
    className?: string;
    articleId?: string;
}

const Deprecated = () => {
    const article = useArticleData();
    return (
        <>
            <HStack
                justify="center"
                max
                className={cls.avatarWrapper}
            >
                <img
                    className={cls.avatar}
                    src={article?.img}
                    alt={article?.title}
                />
            </HStack>
            <TextDeprecated
                title={article?.title}
                text={article?.subtitle}
                size={'large'}
                color="inverted"
            />
            <VStack
                gap="8"
                align="start"
            >
                <HStack gap="4">
                    <IconDeprecated Svg={EyeIcon} />
                    <TextDeprecated
                        text={String(article?.views)}
                        color="inverted"
                    />
                </HStack>
                <HStack gap="4">
                    <IconDeprecated Svg={CalendarIcon} />
                    <TextDeprecated
                        text={String(article?.createdAt)}
                        color="inverted"
                    />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleBlocks)}
        </>
    );
};
const Redesigned = () => {
    const article = useArticleData();
    return (
        <>
            <Text
                title={article?.title}
                text={article?.subtitle}
                size={'large'}
            />
            <AppImage
                fallback={
                    <Skeleton
                        width={'100%'}
                        height={420}
                    />
                }
                src={article?.img}
                className={cls.image}
            />
            {article?.blocks.map(renderArticleBlocks)}
        </>
    );
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { articleId } = props;
    const { t } = useTranslation('article');

    const dispatch = useAppDispatch();
    const isLoading = useArticleIsLoading();
    const error = useArticleError();

    let content;

    useInitialEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, []);

    if (isLoading) {
        content = (
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <VStack
                        max
                        gap="16"
                    >
                        <Skeleton
                            width={'100%'}
                            height={40}
                        />
                        <Skeleton
                            width={'100%'}
                            height={420}
                        />
                        <Skeleton
                            width={'100%'}
                            height={200}
                        />
                    </VStack>
                }
                off={
                    <>
                        <SkeletonDeprecated
                            className={cls.circle}
                            width={200}
                            height={200}
                            border={'50%'}
                        />
                        <SkeletonDeprecated
                            className={cls.title}
                            width={'55%'}
                            height={30}
                        />
                        <SkeletonDeprecated
                            className={cls.subtitle}
                            width={'30%'}
                            height={30}
                        />
                        <Skeleton
                            className={cls.rect}
                            height={230}
                        />
                        <SkeletonDeprecated height={230} />
                    </>
                }
            />
        );
    } else if (error) {
        content = (
            <ToggleFeatureComponent
                name="isRedesignEnable"
                on={
                    <Text
                        title={t('Ошибка загрузки статьи')}
                        text={t('Попробуйте обновить страницу')}
                        align={'center'}
                        error
                    />
                }
                off={
                    <TextDeprecated
                        title={t('Ошибка загрузки статьи')}
                        text={t('Попробуйте обновить страницу')}
                        align={'center'}
                        error
                    />
                }
            />
        );
    } else {
        content = (
            <VStack
                gap="16"
                align="start"
                data-testid={'ArticleDetails'}
            >
                <ToggleFeatureComponent
                    name="isRedesignEnable"
                    on={<Redesigned />}
                    off={<Deprecated />}
                />
            </VStack>
        );
    }

    return (
        <DynamicModule
            reducers={{ article: ArticleReducer }}
            removeAfterUnmount={false}
        >
            {content}
        </DynamicModule>
    );
};
