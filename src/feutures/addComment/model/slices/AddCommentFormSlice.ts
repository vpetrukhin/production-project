import { buildSlice } from '@/shared/lib/store';
import { PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentFormSchema';


const initialState: AddCommentFormSchema = {};

export const AddCommentFormSlice = buildSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
});

export const {
    actions: AddCommentFormActions,
    reducer: AddCommentFormReducer,
    useActions: useAddCommentFormActions
} = AddCommentFormSlice;