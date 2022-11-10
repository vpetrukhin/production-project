import { StateSchema } from 'app/providers/Redux';

export const getArticlesLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesView = (state: StateSchema) => state.articlesPage?.view;
export const getArticlesPage = (state: StateSchema) => state.articlesPage?.page;
export const getArticlesLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesHas = (state: StateSchema) => state.articlesPage?.has;
