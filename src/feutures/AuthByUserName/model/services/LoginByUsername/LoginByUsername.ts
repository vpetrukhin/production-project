import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux/types/StateSchema';
import { User, UserActions } from 'entity/User';

interface AuthData {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, AuthData, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(UserActions.setUser(response.data));
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);