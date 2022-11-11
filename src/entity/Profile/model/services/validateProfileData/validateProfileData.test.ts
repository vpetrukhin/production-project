import { ValidateErrors } from '../../types/ProfileSchema';
import { validateProfileData } from './validateProfileData';

describe('tests for validateProfileData', () => {
    test('return incorrect data without argument', () => {
        expect(validateProfileData()).toEqual([ValidateErrors.INCORRECT_DATA]);
    });
    test('return incorrect age', () => {
        expect(validateProfileData({
            age: 0
        })).toEqual([ValidateErrors.INCORRECT_AGE]);
    });
    test('return incorrect avatar', () => {
        expect(validateProfileData({
            avatar: ''
        })).toEqual([ValidateErrors.INCORRECT_AVATAR]);
    });
    test('return incorrect city', () => {
        expect(validateProfileData({
            city: ''
        })).toEqual([ValidateErrors.INCORRECT_CITY]);
    });
    test('return incorrect firstname', () => {
        expect(validateProfileData({
            first: ''
        })).toEqual([ValidateErrors.INCORRECT_FIRSTNAME]);
    });
    test('return incorrect lastname', () => {
        expect(validateProfileData({
            lastname: ''
        })).toEqual([ValidateErrors.INCORRECT_LASTNAME]);
    });
    test('return incorrect username', () => {
        expect(validateProfileData({
            username: ''
        })).toEqual([ValidateErrors.INCORRECT_USERNAME]);
    });
    test('return empty array with valid profile', () => {
        expect(validateProfileData({
            id: '1',
            first: 'Вася',
            lastname: 'Админович',
            age: 28,
            city: 'Москва',
            username: 'admin',
            avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
        })).toEqual([]);
    });
});