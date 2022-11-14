import { ArticleList, ArticlesViewSelector } from 'entity/Article';
import { ArticleView } from 'entity/Article/model/types/article';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModule } from 'shared/lib/DynamicModule/DynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { getArticlesHas, getArticlesLoading, getArticlesView } from '../model/selectors/ArticlesPageSelectors';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import { fetchMoreArticles } from '../model/services/fetchMoreArticles/fetchMoreArticles';
import { ArticlesActions, ArticlesReducer, getArticles } from '../model/slices/ArticlesSlice';
import cls from './ArticlesPage.module.scss';

interface ArtilclesPageProps {
    className?: string;
}

const ArtilclesPage = (props: ArtilclesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesLoading);
    // const error = useSelector(getArticlesError);
    const view = useSelector(getArticlesView);
    const hasMoreArticles = useSelector(getArticlesHas);

    useInitialEffect(() => {
        dispatch(ArticlesActions.inited);
        dispatch(fetchArticles());
    });

    const onChangeView = useCallback((newView: ArticleView) => {
        dispatch(ArticlesActions.setView(newView));
    }, [dispatch]);

    const onFetchMoreArticles = useCallback(() => {
        if (hasMoreArticles) {
            dispatch(ArticlesActions.setPage());
            dispatch(fetchMoreArticles());
        }
    }, [dispatch, hasMoreArticles]);

    return (
        <DynamicModule reducers={{
            articlesPage: ArticlesReducer
        }}>
            <Page
                className={classNames(cls.ArtilclesPage, {}, [className])}
                onScrollEndCallback={onFetchMoreArticles}
            >
                <ArticlesViewSelector
                    view={view}
                    onViewChange={onChangeView}
                />
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