import { StateSchema } from '@/app/providers/Redux';
import { getProfileForm } from './getProfileForm';

describe('tests for getProfileForm.test', () => {
    test('test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {
                    first: 'name',
                    lastname: 'lastname',
                }
            }
        };

        expect(getProfileForm(state as StateSchema)).toEqual({
            first: 'name',
            lastname: 'lastname',
        });
    });
});