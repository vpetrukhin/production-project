import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleSortTypes, ArticleType, ArticleView, OrderType } from 'entity/Article';
import { ArticlesViewSelector } from 'entity/Article/ui/ArticlesViewSelector/ArticlesViewSelector';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectItem } from 'shared/ui/Select/Select';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useDebounce } from 'shared/lib/hooks/useDebouce';
import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
    getArticlesView
} from '../../model/selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';
import { ArticlesActions } from '../../model/slices/ArticlesSlice';
import cls from './ArticlesFilters.module.scss';
import { HStack, VStack } from 'shared/ui/Stack';

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
            <HStack gap='16' wrap='wrap'>
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
            </HStack>
        </Card>
    );
};