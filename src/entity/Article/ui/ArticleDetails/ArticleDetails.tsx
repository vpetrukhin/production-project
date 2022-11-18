import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticle';
import { ArticleReducer } from '../../model/slice/ArticleSlice';
import { ArticleBlock, BlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticalTextBlockComponent } from '../ArticalTextBlockComponent/ArticalTextBlockComponent';
import cls from './ArticleDetails.module.scss';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

interface ArticleDetailsProps {
    className?: string;
    articleId: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const { className, articleId } = props;
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
                align={TextAlign.CENTER}
                error
            />
        </>;
    } else {
        content = 
            <>
                <div className={cls.avatarWrapper}>
                    <img
                        className={cls.avatar}
                        src={article?.img}
                        alt={article?.title}
                    />
                </div>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.info}>
                    <EyeIcon className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.info}>
                    <CalendarIcon className={cls.icon} />
                    <Text text={String(article?.createdAt)} />
                </div>
                {article?.blocks.map(renderBlocks)}
            </>;
    }

    return (
        <DynamicModule reducers={{article: ArticleReducer}}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModule>
    );
};