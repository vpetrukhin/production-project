import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { DynamicModule } from '@/shared/lib/ui/DynamicModule/DynamicModule';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { getArticlesHas } from '../model/selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { fetchMoreArticles } from '../model/services/fetchMoreArticles/fetchMoreArticles';
import {
    ArticlesActions,
    ArticlesReducer,
} from '../model/slices/ArticlesSlice';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { ArticlesFilters } from './ArticlesFilters/ArticlesFilters';
import { ArticleInfinityList } from './ArticleInfinityList/ArticleInfinityList';
import { ArticlePageGreeting } from '@/feutures/ArticlePageGreeting';
import { ToggleFeatureComponent } from '@/shared/lib/featureFlags';
import { StickyContentLayout } from '@/shared/layout/StickyContentLayout/StickyContentLayout';
import { ViewSelectorContainer } from './ViewSelectorContainer';

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
    }, []);

    const onFetchMoreArticles = useCallback(() => {
        if (hasMoreArticles) {
            dispatch(ArticlesActions.setPage());
            dispatch(fetchMoreArticles());
        }
    }, [dispatch, hasMoreArticles]);

    const content = (
        <ToggleFeatureComponent
            name="isRedesignEnable"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<ArticlesFilters />}
                >
                    <Page
                        className={className}
                        onScrollEndCallback={onFetchMoreArticles}
                        data-testid={'ArtilclesPage'}
                    >
                        <ArticleInfinityList />
                        <ArticlePageGreeting />
                    </Page>
                </StickyContentLayout>
            }
            off={
                <Page
                    className={className}
                    onScrollEndCallback={onFetchMoreArticles}
                    data-testid={'ArtilclesPage'}
                >
                    <ArticlesFilters />
                    <ArticleInfinityList />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModule
            reducers={{
                articlesPage: ArticlesReducer,
            }}
            removeAfterUnmount={false}
        >
            {content}
        </DynamicModule>
    );
};

export default memo(ArtilclesPage);
