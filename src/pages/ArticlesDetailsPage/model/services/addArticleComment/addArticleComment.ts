import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux';
import { getArticleData } from 'entity/Article';
import { IComment } from 'entity/Comment';
import { ValidateErrors } from 'entity/Profile';
import { getUserInfo } from 'entity/User';
import { fetchCommentsList } from '../fetchCommentsList/fetchCommentsLIst';

export const addArticleComment = createAsyncThunk<IComment, string, ThunkConfig<string>>(
    'ArticleDetails/addArticleComment',
    async (commentText, thunkAPI) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI;

        const user = getUserInfo(getState());
        const article = getArticleData(getState());

        if (!user || !article || commentText === '') {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<IComment>('comments', {
                text: commentText,
                articleId: article.id,
                userId: user.id,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsList(article.id));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(ValidateErrors.SERVER_ERROR);
        }
    }
);