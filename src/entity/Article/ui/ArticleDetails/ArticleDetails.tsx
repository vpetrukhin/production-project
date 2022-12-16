import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticle';
import { ArticleBlock } from '../../model/types/article';
import { ArticleReducer } from '../../model/slice/ArticleSlice';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticalTextBlockComponent } from '../ArticalTextBlockComponent/ArticalTextBlockComponent';
import { BlockType } from '../../model/const/articleConsts';
import cls from './ArticleDetails.module.scss';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon';


interface ArticleDetailsProps {
    className?: string;
    articleId?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { articleId } = props;
    const {t} = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);
    const article = useSelector(getArticleData);

    let content;

    useInitialEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(articleId));
        }
    });

    const renderBlocks = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case BlockType.CODE:
            return <ArticleCodeBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />;
        case BlockType.IMAGE:
            return <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />;
        case BlockType.TEXT:
            return <ArticalTextBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />;
        default: return null;
        }
    }, []);

    if (isLoading) {
        content = 
            <>
                <Skeleton className={cls.circle} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={'55%'} height={30} />
                <Skeleton className={cls.subtitle} width={'30%'} height={30} />
                <Skeleton className={cls.rect} height={230} />
                <Skeleton height={230} />
            </>;
    } else if (error) {
        content = 
        <>
            <Text
                title={t('Ошибка загрузки статьи')}
                text={t('Попробуйте обновить страницу')}
                align={'center'}
                error
            />
        </>;
    } else {
        content = 
            <VStack gap='16' align='start'>
                <HStack justify='center' max className={cls.avatarWrapper}>
                    <img
                        className={cls.avatar}
                        src={article?.img}
                        alt={article?.title}
                    />
                </HStack>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={'large'}
                    color='inverted'
                />
                <VStack gap='8' align='start'>
                    <HStack gap='4'>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} color='inverted' />
                    </HStack>
                    <HStack gap='4'>
                        <Icon Svg={CalendarIcon} />
                        <Text text={String(article?.createdAt)} color='inverted' />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlocks)}
            </VStack>;
    }

    return (
        <DynamicModule reducers={{article: ArticleReducer}}>
            {content}
        </DynamicModule>
    );
};