import { StateSchema } from 'app/providers/Redux';
import { getIsAuth } from './getIsAuth';

describe('tests for getIsAuth.test', () => {
    test('default', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                isAuth: true
            }
        };

        expect(getIsAuth(state as StateSchema)).toBe(true);
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {}
        };

        expect(getIsAuth(state as StateSchema)).toBe(undefined);
    });
});