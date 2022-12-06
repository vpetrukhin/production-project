
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationButtonSchema } from './../types/NotificationButtonSchema';

const initialState: NotificationButtonSchema = {};

export const NotificationButtonSlice = createSlice({
    name: 'NotificationButton',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {}
    },
    //extraReducers: (builder) => {
    //    builder.addCase(, (state) => {
    //        state.error = undefined;
    //        state.isLoading = true;
    //    });
    //    builder.addCase(, (state) => {
    //        state.isLoading = false;
    //    });
    //    builder.addCase(, (state, action) => {
    //        state.error = action.payload;
    //        state.isLoading = false;
    //    });
    //},
});

export const { actions: NotificationButtonActions } = NotificationButtonSlice;
export const { reducer: NotificationButtonReducer } = NotificationButtonSlice;
