import { StateSchema } from '@/app/providers/Redux';
import { getArticleDetailsCommentsError, getArticleDetailsCommentsLoading } from './comments';

describe('tests for comments selectors', () => {
    test('default test for getArticleDetailsCommentsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
            }
        };

        expect(getArticleDetailsCommentsLoading(state as StateSchema)).toBe(true);
    });
    test('test for getArticleDetailsCommentsLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {}
        };

        expect(getArticleDetailsCommentsLoading(state as StateSchema)).toBe(false);
    });
    test('default test for getArticleDetailsCommentsError', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'error'
            }
        };

        expect(getArticleDetailsCommentsError(state as StateSchema)).toBe('error');
    });
    test('test for getArticleDetailsCommentsError with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {}
        };

        expect(getArticleDetailsCommentsError(state as StateSchema)).toBe(undefined);
    });
});