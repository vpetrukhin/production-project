import { getProfileData } from './getProfileData';
import { StateSchema } from '@/app/providers/Redux';


describe('tests for getProfileData.test', () => {
    test('test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'name',
                    lastname: 'lastname',
                }
            }
        };

        expect(getProfileData(state as StateSchema)).toEqual({
            first: 'name',
            lastname: 'lastname',
        });
    });
});