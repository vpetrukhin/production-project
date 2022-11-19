import { getArticlesLimit, getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesType } from '../../selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux';
import { Article, ArticleType } from 'entity/Article';
import { ValidateErrors } from 'entity/Profile';
import { addQueryParams } from 'shared/lib/url/url';
import { getArticlesFilters } from '../../selectors/getArticlesFilters/getArticlesFilters';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const limit = getArticlesLimit(getState());
        const filters = getArticlesFilters(getState());

        addQueryParams(filters);

        const { order, search, sort, type } = filters;

        try {
            const response = await extra.api.get<Article[]>('articles/', {
                params: {
                    _page: 1,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    type: type === ArticleType.All ? undefined : type,
                    q: search,
                    _expand: 'user'
                }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(ValidateErrors.SERVER_ERROR);
        }
    }
);