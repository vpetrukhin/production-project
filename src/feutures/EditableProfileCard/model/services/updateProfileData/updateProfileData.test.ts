import { Country } from 'entity/Country';
import { Currency } from 'entity/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from '../../../../../entity/Profile/model/types/profile';
import { updateProfileData } from './updateProfileData';

const data: Profile = {
    first: 'name',
    age: 22,
    avatar: 'avatar',
    city: 'city',
    country: Country.Germany,
    currency: Currency.RUB,
    id: '33',
    lastname: 'lastname',
    username: 'username'
};

describe('tests for updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.payload).toEqual(data);
    });
    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData);

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});