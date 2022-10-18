import { LoginSchema } from './../../types/LoginSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/LoginByUsername/LoginByUsername';


const initialState: LoginSchema = {
    username: '',
    password: '',
};

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
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

export const { actions: LoginActions } = LoginSlice;
export const { reducer: LoginReducer } = LoginSlice;