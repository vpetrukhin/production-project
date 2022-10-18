import { StateSchema } from 'app/providers/Redux/types/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'feutures/AuthByUserName/index';
import { getLoginState } from './getLoginState';

describe('tests for getLoginState.test', () => {
    const mockLoginState: LoginSchema = {
        username: 'name',
        password: 'password',
        isLoading: false,
        error: 'error',
    };

    test('get login state', () => {
        const state: DeepPartial<StateSchema> = {
            login: mockLoginState,
        };

        expect(getLoginState(state as StateSchema)).toEqual(mockLoginState);
    });
});