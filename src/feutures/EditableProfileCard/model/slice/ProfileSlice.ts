import { PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entity/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/ProfileSchema';
import { buildSlice } from '@/shared/lib/store';


const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

export const ProfileSlice = buildSlice({
    name: 'profile',
    initialState,
    reducers: {
        onStartEdit: (state) => {
            state.readonly = false;
        },
        onCancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.validateErrors = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.error = undefined;
            state.validateErrors = undefined;
            state.isLoading = true;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            if (Array.isArray(action.payload)) {
                state.validateErrors = action.payload;
            } else {
                state.error = action.payload;
            }
            state.isLoading = false;
        });
    },
});

export const { actions: ProfileActions, reducer: ProfileReducer, useActions: useProfileActions } = ProfileSlice;