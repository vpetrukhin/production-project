import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/ProfileSchema';


const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;