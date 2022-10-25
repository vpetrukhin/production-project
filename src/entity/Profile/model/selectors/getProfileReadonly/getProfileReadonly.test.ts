import { StateSchema } from 'app/providers/Redux';
import { getProfileReadonly } from './getProfileReadonly';

describe('tests for getProfileIsLoading.test', () => {
    test('test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            }
        };

        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
});