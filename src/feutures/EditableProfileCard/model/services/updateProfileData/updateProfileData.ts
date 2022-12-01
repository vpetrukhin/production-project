import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/Redux/types/StateSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile } from 'entity/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { ValidateErrors } from '../../const/editableProfileCardConsts';


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateErrors[] | ValidateErrors>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length > 0) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile/' + formData?.id, formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(ValidateErrors.SERVER_ERROR);
        }
    }
);