import { buildSlice } from '@/shared/lib/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/article';
import { ArticleSchema } from '../types/ArticleSchema';


const initialState: ArticleSchema = {
    isLoading: false,
};

export const ArticleSlice = buildSlice({
    name: 'articles',
    initialState,
    reducers: {
        resetArticle(state) {
            state.data = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { actions: ArticleActions, reducer: ArticleReducer, useActions: useArticleAction } = ArticleSlice;