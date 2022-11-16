import { StateSchema } from 'app/providers/Redux';
import { ArticleSortTypes, ArticleType, ArticleView } from 'entity/Article';

export const getArticlesLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPage = (state: StateSchema) => state.articlesPage?.page;
export const getArticlesLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesHas = (state: StateSchema) => state.articlesPage?.has;
export const getArticlesInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortTypes.VIEWS;
export const getArticlesSearch = (state: StateSchema) => state.articlesPage?.search || '';
export const getArticlesOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.All;
