import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/Redux';
import { getLoginError } from './getLoginError';

describe('tests for getLoginError.test', () => {
    test('return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error',
            }
        };

        expect(getLoginError(state as StateSchema)).toBe('error');
    });
    test('return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});