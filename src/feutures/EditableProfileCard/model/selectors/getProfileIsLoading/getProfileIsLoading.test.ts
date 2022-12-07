import { StateSchema } from '@/app/providers/Redux';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('tests for getProfileIsLoading.test', () => {
    test('test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            }
        };

        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
});