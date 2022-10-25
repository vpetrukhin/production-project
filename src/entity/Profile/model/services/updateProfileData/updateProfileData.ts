import { getProfileData } from 'entity/Profile/model/selectors/getProfileData/getProfileData';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux/types/StateSchema';
import { Profile } from '../../types/ProfileSchema';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const formData = getProfileData(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

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