import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortTypes, ArticleType, ArticleView, OrderType } from '../../model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectItem } from 'shared/ui/Select/Select';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ArticlesActions } from 'pages/ArticlesPage';
import { ArticlesViewSelector } from '../ArticlesViewSelector/ArticlesViewSelector';
import { useSelector } from 'react-redux';
import { getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesType, getArticlesView } from 'pages/ArticlesPage/model/selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import cls from './ArticlesFilters.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useDebounce } from 'shared/lib/hooks/useDebouce';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { addQueryParams } from 'shared/lib/url/url';

interface ArticlesFiltersProps {
    className?: string;
}

export const ArticlesFilters = (props: ArticlesFiltersProps) => {
    const { className } = props;
    const {t} = useTranslation('article');

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);
    const sortType = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);

    const sortTypes = useMemo<SelectItem<ArticleSortTypes>[]>(() => [
        {
            content: t('prosmotram'),
            value: ArticleSortTypes.VIEWS
        },
        {
            content: t('data-sozdaniya'),
            value: ArticleSortTypes.CREATED
        }
    ], [t]);

    const orderOptions = useMemo<SelectItem<OrderType>[]>(() => [
        {
            value: 'asc',
            content: t('vozrastaniyu')
        },
        {
            value: 'desc',
            content: t('ubyvaniyu')
        },
    ], [t]);

    const types = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.All,
            content: t('all')
        },
        {
            value: ArticleType.ECONOMY,
            content: t('ekonomika')
        },
        {
            value: ArticleType.IT,
            content: t('it')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('sciense')
        },
    ], [t]);

    const fetchData = useCallback(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onSortTypeSort = useCallback((newSortType: ArticleSortTypes) => {
        dispatch(ArticlesActions.setSort(newSortType));
        fetchData();
    }, [dispatch, fetchData]);

    const onOrderSort = useCallback((newOrder: OrderType) => {
        dispatch(ArticlesActions.setOrder(newOrder));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeView = useCallback((newView: ArticleView) => {
        dispatch(ArticlesActions.setView(newView));
    }, [dispatch]);

    const onSearchChange = useCallback((newSearch: string) => {
        dispatch(ArticlesActions.setSearch(newSearch));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onTypeChange = useCallback((newType: ArticleType) => {
        dispatch(ArticlesActions.setType(newType));
        fetchData();
    }, [dispatch, fetchData]);


    return (
        <Card theme={CardTheme.OUTLINE} className={classNames(cls.ArticlesFilters, {}, [className])}>
            <Select
                items={sortTypes}
                label={t('sortirovat-po')}
                value={sortType}
                onChange={onSortTypeSort}
            />
            <Select
                items={orderOptions}
                label={t('po')}
                value={order}
                onChange={onOrderSort}
            />
            <ArticlesViewSelector
                view={view}
                onViewChange={onChangeView}
                className={cls.selector}
            />
            <Input
                value={search}
                placeholder={t('poisk')}
                onChange={onSearchChange}
                className={cls.input}
            />
            <Tabs
                value={type}
                tabs={types}
                onTabClick={onTypeChange}
            />
        </Card>
    );
};