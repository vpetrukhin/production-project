import { getArticlesLimit, getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesType } from '../../selectors/ArticlesPageSelectors';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux';
import { Article, ArticleType } from 'entity/Article';
import { ValidateErrors } from 'entity/Profile';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const limit = getArticlesLimit(getState());
        const sort = getArticlesSort(getState());
        const order = getArticlesOrder(getState());
        const search = getArticlesSearch(getState());
        const type = getArticlesType(getState());

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