import { USER_LOCALSTORAGE_KEY } from './../../../../../shared/config/const/localStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../../types/UserSchema';


const initialState: UserSchema = {
    _inited: false,
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
            state.authKey = action.payload.id;
            state.userInfo = action.payload;
        },
        initAuth: (state) => {
            const user: User = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY) as string);
            state.authKey = user?.id;
            state.userInfo = user;

            state._inited = true;
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authKey = undefined;
            state.userInfo = undefined;
        }
    },
});

export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;