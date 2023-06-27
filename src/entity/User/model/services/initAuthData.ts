import { ThunkConfig } from '@/app/providers/Redux';
import { USER_LOCALSTORAGE_KEY } from '@/shared/config/const/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfoRequest } from '../../api/userApi';
import { User } from '../types/UserSchema';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(
                getUserInfoRequest({ userId: JSON.parse(userId) }),
            ).unwrap();

            return response;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
