import { getArticlesLimit, getArticlesPage } from '../../selectors/ArticlesPageSelectors';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux';
import { Article } from 'entity/Article';
import { ValidateErrors } from 'entity/Profile';

export const fetchMoreArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articles/fetchMoreArticles',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const pageNum = getArticlesPage(getState());
        const limit = getArticlesLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('articles/', {
                params: {
                    _expand: 'user',
                    _page: pageNum,
                    _limit: limit,
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