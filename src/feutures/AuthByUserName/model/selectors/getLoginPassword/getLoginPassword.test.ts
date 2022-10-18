import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/Redux';
import { getLoginPassword } from './getLoginPassword';


describe('tests for getLoginPassword.test', () => {
    const mockPassword = 'mock-password';

    test('get password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: mockPassword,
            }
        };

        expect(getLoginPassword(state as StateSchema)).toBe(mockPassword);
    });

    test('get \'\' with empty store', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});