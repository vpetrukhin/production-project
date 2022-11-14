import { User } from 'entity/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './LoginByUsername';

const mockAuthData = {
    username: 'username',
    password: 'password',
};

const mockUser: User = {
    id: '1',
    username: 'username',
    avatar: ''
};

describe('tests for LoginByUsername.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: mockUser }));
        const result = await thunk.callThunk(mockAuthData);

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalled();
        expect(result.payload).toEqual(mockUser);
    });
    test('error', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({
            username: '',
            password: ''
        });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});