import { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import { StateSchema } from 'app/providers/Redux';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'entity/Comment';
import { fetchCommentsList } from '../../services/fetchCommentsList/fetchCommentsLIst';

const commentAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

export const getAllComments = commentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentAdapter.getInitialState()
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        entities: {},
        ids: [],
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchCommentsList.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.isLoading = false;
            commentAdapter.setAll(state, action);
        });
        builder.addCase(fetchCommentsList.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { reducer: CommentsReducer } = commentsSlice;