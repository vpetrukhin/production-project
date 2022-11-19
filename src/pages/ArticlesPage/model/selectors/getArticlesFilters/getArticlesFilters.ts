import { createSelector } from '@reduxjs/toolkit';
import { getArticlesSort, getArticlesSearch, getArticlesOrder, getArticlesType } from '../ArticlesPageSelectors/ArticlesPageSelectors';

export const getArticlesFilters = createSelector(
    getArticlesSort,
    getArticlesSearch,
    getArticlesOrder,
    getArticlesType,
    (sort, search, order, type) => ({
        sort, search, order, type
    })
);