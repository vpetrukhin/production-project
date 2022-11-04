import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { fetchArticleById } from '../../model/services/fethcArticleById';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticle';
import { ArticleReducer } from '../../model/slice/ArticleSlice';
import cls from './ArticleDetails.module.scss';

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

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, [articleId, dispatch]);

    let content;

    if (isLoading) {
        content = 
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Skeleton className={cls.circle} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={'55%'} height={30} />
                <Skeleton className={cls.subtitle} width={'30%'} height={30} />
                <Skeleton className={cls.rect} height={230} />
                <Skeleton height={230} />
            </div>;
    } else if (error) {
        content = 
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <Text
                title={t('Ошибка загрузки статьи')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
                error
            />
        </div>;
    } else {
        content = 
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {article?.title}
            </div>;
    }

    return (
        <DynamicModule reducers={{article: ArticleReducer}}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModule>
    );
};