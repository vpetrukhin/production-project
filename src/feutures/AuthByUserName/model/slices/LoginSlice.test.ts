import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'feutures/AuthByUserName/types/LoginSchema';
import { LoginActions, LoginReducer } from './LoginSlice';


describe('tests for LoginSlice.test', () => {
    test('test setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername('admin'))).toEqual({ username: 'admin' });
    });
    test('test setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('pass'))).toEqual({ password: 'pass' });
    });
});