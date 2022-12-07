import { StateSchema } from '@/app/providers/Redux';

export const getArticleDetailsRecomendationsLoading = (state: StateSchema) => state.articleDetailsRecomendation?.isLoading || false;
export const getArticleDetailsRecomendationsError = (state: StateSchema) => state.articleDetailsRecomendation?.error;