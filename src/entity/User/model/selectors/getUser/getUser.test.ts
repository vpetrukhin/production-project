import { StateSchema } from '@/app/providers/Redux';
import { getUser } from './getUser';

describe('tests for getUser.test', () => {
    test('default', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                userInfo: {
                    id: '1',
                    username: 'admin',
                },
                isAuth: true
            }
        };

        expect(getUser(state as StateSchema)).toEqual({
            userInfo: {
                id: '1',
                username: 'admin',
            },
            isAuth: true
        });
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {}
        };

        expect(getUser(state as StateSchema)).toEqual({});
    });
});