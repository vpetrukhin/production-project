import { ThunkConfig } from '@/app/providers/Redux';
import { USER_LOCALSTORAGE_KEY } from '@/shared/config/const/localStorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setJsonSettings } from '../../api/userApi';
import { getJsonSettings } from '../selectors/getJsonSettings/getJsonSettings';
import { JsonSettings } from '../types/JsonSettings';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (jsonSettings, thunkAPI) => {
    const { rejectWithValue, dispatch, getState } = thunkAPI;

    const currentSetting = dispatch(() => getJsonSettings(getState()));
    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
        return rejectWithValue('');
    }

    try {
        const response = await dispatch(
            setJsonSettings({
                userId: JSON.parse(userId),
                jsonSettings: {
                    ...currentSetting,
                    ...jsonSettings,
                },
            }),
        ).unwrap();

        if (!response) {
            throw rejectWithValue('');
        }

        return response;
    } catch (e) {
        console.log(e);
        return rejectWithValue('');
    }
});
