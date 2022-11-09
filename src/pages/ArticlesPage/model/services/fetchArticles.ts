import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux';
import { Article } from 'entity/Article';
import { ValidateErrors } from 'entity/Profile';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articles/fetchArticles',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('articles/', {
                params: {
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