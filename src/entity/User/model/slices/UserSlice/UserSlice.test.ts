import { UserSchema } from '../../types/UserSchema';
import { UserActions, UserReducer } from './UserSlice';

const initialState: UserSchema = {
    isAuth: false,
    _inited: false,
};

describe('tests for UserSlice.test', () => {
    test('test setUser action', () => {
        expect(
            UserReducer(
                initialState,
                UserActions.setUser({
                    id: '1',
                    username: 'admin',
                    avatar: '',
                }),
            ),
        ).toEqual({
            isAuth: true,
            _inited: false,
            userInfo: {
                id: '1',
                username: 'admin',
                avatar: '',
            },
        });
    });
    test('test logout action', () => {
        expect(
            UserReducer(
                {
                    ...initialState,
                    userInfo: {
                        id: '1',
                        username: 'admin',
                        avatar: '',
                    },
                },
                UserActions.logout(),
            ),
        ).toEqual({
            isAuth: false,
            _inited: false,
        });
    });
});
