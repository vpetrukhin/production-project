import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux';
import { Article } from 'entity/Article';
import { ValidateErrors } from 'entity/Profile';

export const fetchRecomendationList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'recomendation/fetchRecomendationList',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('articles/', {
                params: {
                    _limit: 4
                }
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