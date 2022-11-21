import { ArticleList } from 'entity/Article';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getArticlesHas, getArticlesLoading, getArticlesView } from '../model/selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { fetchMoreArticles } from '../model/services/fetchMoreArticles/fetchMoreArticles';
import { ArticlesActions, ArticlesReducer, getArticles } from '../model/slices/ArticlesSlice';
import cls from './ArticlesPage.module.scss';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { useSearchParams } from 'react-router-dom';
import { ArticlesFilters } from './ArticlesFilters/ArticlesFilters';

interface ArtilclesPageProps {
    className?: string;
}

const ArtilclesPage = (props: ArtilclesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    const view = useSelector(getArticlesView);
    const hasMoreArticles = useSelector(getArticlesHas);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onFetchMoreArticles = useCallback(() => {
        if (hasMoreArticles) {
            dispatch(ArticlesActions.setPage());
            dispatch(fetchMoreArticles());
        }
    }, [dispatch, hasMoreArticles]);

    return (
        <DynamicModule
            reducers={{
                articlesPage: ArticlesReducer
            }}
            removeAfterUnmount={false}
        >
            <Page
                className={classNames(cls.ArtilclesPage, {}, [className])}
                onScrollEndCallback={onFetchMoreArticles}
            >
                <ArticlesFilters />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModule>
    );
};

export default memo(ArtilclesPage);