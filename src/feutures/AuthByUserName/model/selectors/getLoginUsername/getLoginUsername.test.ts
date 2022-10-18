import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/Redux';
import { getLoginUsername } from './getLoginUsername';


describe('tests for getLoginUserName.test', () => {
    const mockUsername = 'mock-username';

    test('get password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: mockUsername,
            }
        };

        expect(getLoginUsername(state as StateSchema)).toBe(mockUsername);
    });

    test('get \'\' with empty store', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});