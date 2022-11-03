import { ArticleReducer } from '../../model/slice/ArticleSlice';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import cls from './ArticleDetails.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from '../../model/services/fethcArticleById';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/getArticle';
import { Text, TextAlign } from 'shared/ui/Text/Text';

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
                Loading...
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