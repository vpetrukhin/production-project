import { Country } from '@/entity/Country';
import { Currency } from '@/entity/Currency';
import { Profile } from '@/entity/Profile';
import { ProfileSchema } from '../types/ProfileSchema';
import { ProfileActions, ProfileReducer } from './ProfileSlice';

const mockProfileData: Profile = {
    id: '1',
    first: 'Вася',
    lastname: 'Админович',
    age: 28,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Москва',
    username: 'admin',
    avatar: 'https://images.unsplash.com/photo-1665856314098-4aa9ff7a3d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
};

const initialState: DeepPartial<ProfileSchema> = {
    isLoading: false,
    readonly: true,
};

describe('tests for ProfileSlice', () => {
    test('test onStartEdit', () => {
        expect(ProfileReducer(
            initialState as ProfileSchema,
            ProfileActions.onStartEdit
        )).toEqual({
            isLoading: false,
            readonly: false,
        });
    });
    test('test onCancelEdit', () => {
        expect(ProfileReducer(
            {
                ...initialState,
                form: mockProfileData,
                data: mockProfileData,
            } as ProfileSchema,
            ProfileActions.onStartEdit
        )).toEqual({
            isLoading: false,
            readonly: false,
            form: mockProfileData,
            data: mockProfileData,
        });
    });
    test('test setReadonly', () => {
        expect(ProfileReducer(
            {
                ...initialState,
            } as ProfileSchema,
            ProfileActions.setReadonly(false)
        )).toEqual({
            isLoading: false,
            readonly: false,
        });
    });
    test('test updateProfile', () => {
        expect(ProfileReducer(
            {
                ...initialState,
                form: mockProfileData,
                data: mockProfileData,
            } as ProfileSchema,
            ProfileActions.updateProfile({
                lastname: 'JavaScript',
            })
        )).toEqual({
            isLoading: false,
            readonly: true,
            data: mockProfileData,
            form: {
                ...mockProfileData,
                lastname: 'JavaScript',
            }
        });
    });
});