import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux';
import { ArticleSortTypes, OrderType, ArticleType } from 'entity/Article';
import { getArticlesInited } from '../../selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { ArticlesActions } from '../../slices/ArticlesSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'ArticlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const articlesInited = getArticlesInited(getState());

        if (!articlesInited) {
            const sortFromUrl = searchParams.get('sort') as ArticleSortTypes;
            const searchFromUrl = searchParams.get('search');
            const orderFromUrl = searchParams.get('order') as OrderType;
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (sortFromUrl) dispatch(ArticlesActions.setSort(sortFromUrl));
            if (searchFromUrl) dispatch(ArticlesActions.setSearch(searchFromUrl));
            if (orderFromUrl) dispatch(ArticlesActions.setOrder(orderFromUrl));
            if (typeFromUrl) dispatch(ArticlesActions.setType(typeFromUrl));

            dispatch(ArticlesActions.inited());
            dispatch(fetchArticles());
        }
    }
);