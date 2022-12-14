import { USER_LOCALSTORAGE_KEY } from './../../../../../shared/config/const/localStorage';
import { PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../../types/UserSchema';
import { buildSlice } from '@/shared/lib/store';


const initialState: UserSchema = {
    isAuth: false,
    _inited: false,
};

export const UserSlice = buildSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
            state.isAuth = true;
            state.userInfo = action.payload;
        },
        initAuth: (state) => {
            const user: User = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) as string);
            state.userInfo = user;
            state.isAuth = Boolean(user);

            state._inited = true;
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.isAuth = false;
            state.userInfo = undefined;
        }
    },
});

export const {
    actions: UserActions,
    reducer: UserReducer,
    useActions: useUserAction
} = UserSlice;