import { StateSchema } from 'app/providers/Redux/types/StateSchema';

export const getArticleIsLoading = (state: StateSchema) => state.article?.isLoading;
export const getArticleError = (state: StateSchema) => state.article?.error;
export const getArticleData = (state: StateSchema) => state.article?.data;