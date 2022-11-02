import { createSlice } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types/ArticleSchema';


const initialState: ArticleSchema = {
    isLoading: false,
};

export const ArticleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
});

export const { actions: ArticleActions } = ArticleSlice;
export const { reducer: ArticleReducer } = ArticleSlice;