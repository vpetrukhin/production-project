import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserActions } from 'entity/User';

interface AuthData {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, AuthData, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(UserActions.setUser(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    }
);