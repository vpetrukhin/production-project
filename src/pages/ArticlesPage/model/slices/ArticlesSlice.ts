import { StateSchema } from 'app/providers/Redux';
import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entity/Article';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/config/const/localStorage';
import { fetchArticles } from '../services/fetchArticles';


export const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const initialState: ArticlesPageSchema = {
    isLoading: false,
    view: ArticleView.SMALL,
    entities: {},
    ids: [],
};

export const ArticlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        inited: state => {
            state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            articlesAdapter.setAll(state, action);
        });
        builder.addCase(fetchArticles.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { actions: ArticlesActions } = ArticlesSlice;
export const { reducer: ArticlesReducer } = ArticlesSlice;