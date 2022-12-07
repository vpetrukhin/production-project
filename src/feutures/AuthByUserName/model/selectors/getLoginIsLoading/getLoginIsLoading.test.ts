import { StateSchema } from '@/app/providers/Redux';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('tests for getLoginIsLoading.test', () => {
    test('return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            }
        };

        expect(getLoginIsLoading(state as StateSchema)).toBe(true);
    });
    test('return false with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toBe(false);
    });
});