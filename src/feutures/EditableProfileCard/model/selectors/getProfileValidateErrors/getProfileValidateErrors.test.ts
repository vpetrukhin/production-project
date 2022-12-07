import { StateSchema } from '@/app/providers/Redux';
import { ValidateErrors } from '../../const/editableProfileCardConsts';
import { getProfileValidateError } from './getProfileValidateErrors';

describe('tests for getProfileIsLoading.test', () => {
    test('test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateErrors.SERVER_ERROR],
            }
        };

        expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateErrors.SERVER_ERROR]);
    });
});