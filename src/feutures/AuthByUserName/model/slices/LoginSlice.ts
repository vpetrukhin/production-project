import { LoginSchema } from './../../types/LoginSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/LoginByUsername/LoginByUsername';
import { buildSlice } from '@/shared/lib/store';


const initialState: LoginSchema = {
    username: '',
    password: '',
};

export const LoginSlice = buildSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { actions: LoginActions, reducer: LoginReducer, useActions: useLoginAction } = LoginSlice;