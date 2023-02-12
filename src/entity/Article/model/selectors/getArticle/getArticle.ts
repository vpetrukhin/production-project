import { StateSchema } from '@/app/providers/Redux';
import { buildSelector } from '@/shared/lib/store';

export const [useArticleIsLoading, getArticleIsLoading] = buildSelector(
    (state: StateSchema) => state.article?.isLoading);
export const [useArticleError, getArticleError] = buildSelector((state: StateSchema) => state.article?.error);
export const [useArticleData, getArticleData] = buildSelector((state: StateSchema) => state.article?.data);