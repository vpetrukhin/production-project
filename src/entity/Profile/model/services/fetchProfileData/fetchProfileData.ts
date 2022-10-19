import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux/types/StateSchema';
import { Profile } from '../../types/ProfileSchema';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'login/loginByUsername',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);