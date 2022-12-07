import { getProfileError } from './getProfileError';
import { StateSchema } from '@/app/providers/Redux';


describe('tests for getProfileError.test', () => {
    test('test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error'
            }
        };

        expect(getProfileError(state as StateSchema)).toBe('error');
    });
});