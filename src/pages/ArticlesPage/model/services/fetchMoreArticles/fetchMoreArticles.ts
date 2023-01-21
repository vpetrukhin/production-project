import { getArticlesLimit, getArticlesOrder, getArticlesPage, getArticlesSearch, getArticlesSort, getArticlesType } from '../../selectors/ArticlesPageSelectors/ArticlesPageSelectors';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/Redux';
import { Article, ArticleType } from '@/entity/Article';
import { ValidateErrors } from '@/feutures/EditableProfileCard';

export const fetchMoreArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articles/fetchMoreArticles',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const pageNum = getArticlesPage(getState());
        const limit = getArticlesLimit(getState());
        const sort = getArticlesSort(getState());
        const order = getArticlesOrder(getState());
        const search = getArticlesSearch(getState());
        const type = getArticlesType(getState());

        try {
            const response = await extra.api.get<Article[]>('articles/', {
                params: {
                    _expand: 'user',
                    _page: pageNum,
                    _sort: sort,
                    _order: order,
                    q: search,
                    _limit: limit,
                    type: type === ArticleType.All ? undefined : type,
                },

            });


            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(ValidateErrors.SERVER_ERROR);
        }
    }
);