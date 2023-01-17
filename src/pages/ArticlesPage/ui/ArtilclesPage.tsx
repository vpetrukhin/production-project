import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { getArticlesHas } from '../model/selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { fetchMoreArticles } from '../model/services/fetchMoreArticles/fetchMoreArticles';
import { ArticlesActions, ArticlesReducer } from '../model/slices/ArticlesSlice';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { ArticlesFilters } from './ArticlesFilters/ArticlesFilters';
import { ArticleInfinityList } from './ArticleInfinityList/ArticleInfinityList';

interface ArtilclesPageProps {
    className?: string;
}

const ArtilclesPage = (props: ArtilclesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
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
                className={className}
                onScrollEndCallback={onFetchMoreArticles}
                data-testid={'ArtilclesPage'}
            >
                <ArticlesFilters />
                <ArticleInfinityList />
            </Page>
        </DynamicModule>
    );
};

export default memo(ArtilclesPage);