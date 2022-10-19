import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/ProfileSchema';


const initialState: ProfileSchema = {
    isLoading: false,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;