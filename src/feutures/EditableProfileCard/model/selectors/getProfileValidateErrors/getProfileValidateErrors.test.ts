import { StateSchema } from '@/app/providers/Redux';
import { ValidateErrors } from '../../const/editableProfileCardConsts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('tests for getProfileIsLoading.test', () => {
    test('test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateErrors.SERVER_ERROR],
            }
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateErrors.SERVER_ERROR]);
    });
});