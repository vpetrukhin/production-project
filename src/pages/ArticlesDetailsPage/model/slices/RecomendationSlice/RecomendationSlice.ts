import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/Redux';
import { Article } from '@/entity/Article';
import { fetchRecomendationList } from '../../services/fetchRecomendationList/fetchRecomendationList';
import { ArticleDetailsRecomenationSchema } from '../../types/ArticleDetailsRecomenationSchema';


const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getAllRecomendation = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecomendation || articleAdapter.getInitialState()
);

const initialState: ArticleDetailsRecomenationSchema = {
    isLoading: false,
    ids: [],
    entities: {}
};

export const RecomendationSlice = createSlice({
    name: 'ArticleDetails/recomendations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecomendationList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchRecomendationList.fulfilled, (state, action) => {
            state.isLoading = false;
            articleAdapter.setAll(state, action);
        });
        builder.addCase(fetchRecomendationList.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { actions: RecomendationActions } = RecomendationSlice;
export const { reducer: RecomendationReducer } = RecomendationSlice;