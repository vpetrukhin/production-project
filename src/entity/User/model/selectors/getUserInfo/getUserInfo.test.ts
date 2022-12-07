import { StateSchema } from '@/app/providers/Redux';
import { getUserInfo } from './getUserInfo';

describe('tests for getUserInfo.test', () => {
    test('default', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                userInfo: {
                    id: '1',
                    username: 'admin'
                }
            }
        };

        expect(getUserInfo(state as StateSchema)).toEqual({
            id: '1',
            username: 'admin'
        });
    });
    test('with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            user: {}
        };

        expect(getUserInfo(state as StateSchema)).toBe(undefined);
    });
});