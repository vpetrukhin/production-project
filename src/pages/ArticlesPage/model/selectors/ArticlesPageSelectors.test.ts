import { StateSchema } from 'app/providers/Redux';
import { ArticleView } from 'entity/Article';
import { getArticlesError, getArticlesHas, getArticlesInited, getArticlesLimit, getArticlesLoading, getArticlesPage, getArticlesView } from './ArticlesPageSelectors';

describe('tests for ArticlesPageSelectors', () => {
    test('test for getArticlesLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
            }
        };

        expect(getArticlesLoading(state as StateSchema)).toBe(true);
    });
    test('test for getArticlesLoading with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {}
        };

        expect(getArticlesLoading(state as StateSchema)).toBe(false);
    });
    test('test for getArticlesError', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                error: 'error'
            }
        };

        expect(getArticlesError(state as StateSchema)).toBe('error');
    });
    test('test for getArticlesError with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {}
        };

        expect(getArticlesError(state as StateSchema)).toBe(undefined);
    });
    test('test for getArticlesView', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                view: ArticleView.BIG
            }
        };

        expect(getArticlesView(state as StateSchema)).toBe(ArticleView.BIG);
    });
    test('test for getArticlesView with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {}
        };

        expect(getArticlesView(state as StateSchema)).toBe(ArticleView.SMALL);
    });
    test('test for getArticlesPage', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                page: 1
            }
        };

        expect(getArticlesPage(state as StateSchema)).toBe(1);
    });
    test('test for getArticlesPage with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {}
        };

        expect(getArticlesPage(state as StateSchema)).toBe(undefined);
    });
    test('test for getArticlesLimit', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                limit: 4
            }
        };

        expect(getArticlesLimit(state as StateSchema)).toBe(4);
    });
    test('test for getArticlesLimit with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {}
        };

        expect(getArticlesLimit(state as StateSchema)).toBe(9);
    });
    test('test for getArticlesHas', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                has: true
            }
        };

        expect(getArticlesHas(state as StateSchema)).toBe(true);
    });
    test('test for getArticlesLimit with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {}
        };

        expect(getArticlesHas(state as StateSchema)).toBe(undefined);
    });
    test('test for getArticlesInited', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                _inited: true
            }
        };

        expect(getArticlesInited(state as StateSchema)).toBe(true);
    });
    test('test for getArticlesInited with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {}
        };

        expect(getArticlesInited(state as StateSchema)).toBe(undefined);
    });
});