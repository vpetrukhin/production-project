import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentFormSchema';


const initialState: AddCommentFormSchema = {};

export const AddCommentFormSlice = createSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
});

export const { actions: AddCommentFormActions } = AddCommentFormSlice;
export const { reducer: AddCommentFormReducer } = AddCommentFormSlice;