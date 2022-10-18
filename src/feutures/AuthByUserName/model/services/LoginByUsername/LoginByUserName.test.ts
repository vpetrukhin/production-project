import axios from 'axios';
import { User } from 'entity/User';
import { Dispatch } from 'redux';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsuncThunk';
import { loginByUsername } from './LoginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('tests for LoginByUserName.test', () => {
    const userValue: User = {
        id: '1',
        username: 'user',
    };

    test('success login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const AsyncThunkAction = new TestAsyncThunk(loginByUsername);
        const result = await AsyncThunkAction.callThunk({ username: 'user', password: 'password' });

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(AsyncThunkAction.dispatch).toBeCalledTimes(3);
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const AsyncThunkAction = new TestAsyncThunk(loginByUsername);
        const result = await AsyncThunkAction.callThunk({ username: 'user', password: 'password' });

        expect(result.meta.requestStatus).toBe('rejected');
        expect(AsyncThunkAction.dispatch).toBeCalledTimes(2);
        expect(result.payload).toEqual('error');
    });
});