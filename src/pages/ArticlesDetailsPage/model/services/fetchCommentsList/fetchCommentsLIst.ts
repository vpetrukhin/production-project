import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/Redux';
import { IComment } from '@/entity/Comment';
import { ValidateErrors } from '@/feutures/EditableProfileCard';

export const fetchCommentsList = createAsyncThunk<IComment[], string | undefined, ThunkConfig<string>>(
    'articleDetailsPageComments/fetchCommentsList',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            if (!id) {
                return rejectWithValue('Некорректный id');
            }

            const response = await extra.api.get<IComment[]>('/comments/', {
                params: {
                    articleId: id,
                    _expand: 'user'
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