import { ArticleSortTypes, OrderType, ArticleView, ArticleType } from '@/entity/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebouce';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticlesView, getArticlesSort, getArticlesOrder, getArticlesSearch, getArticlesType } from '../model/selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles';
import { ArticlesActions } from '../model/slices/ArticlesSlice';

export function useArticleFilters() {
    const view = useSelector(getArticlesView);
    const sortType = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);

    const dispatch = useAppDispatch();
    const fetchData = useCallback(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onSortTypeSort = useCallback(
        (newSortType: ArticleSortTypes) => {
            dispatch(ArticlesActions.setSort(newSortType));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onOrderSort = useCallback(
        (newOrder: OrderType) => {
            dispatch(ArticlesActions.setOrder(newOrder));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeView = useCallback(
        (newView: ArticleView) => {
            dispatch(ArticlesActions.setView(newView));
        },
        [dispatch],
    );

    const onSearchChange = useCallback(
        (newSearch: string) => {
            dispatch(ArticlesActions.setSearch(newSearch));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onTypeChange = useCallback(
        (newType: ArticleType) => {
            dispatch(ArticlesActions.setType(newType));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        view,
        sortType,
        order,
        type,
        search,
        onSortTypeSort,
        onOrderSort,
        onChangeView,
        onSearchChange,
        onTypeChange,
    }
}