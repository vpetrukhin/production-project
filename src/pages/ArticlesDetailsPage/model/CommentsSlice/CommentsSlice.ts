import { ArticleDetailsCommentsSchema } from './../types/ArticleDetailsCommentsSchema';
import { StateSchema } from 'app/providers/Redux';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IComment } from 'entity/Comment';

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
        entities: {
            '1': {
                id: '1',
                text: 'comment1',
                user: { id: '1', username: 'name', avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' }
            },
            '2': {
                id: '2',
                text: 'comment2',
                user: { id: '1', username: 'name', avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' }
            }
        },
        ids: ['1', '2'],
    }),
    reducers: {},
});

export const { reducer: CommentsReducer } = commentsSlice;