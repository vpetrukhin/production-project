import { buildSlice } from '@/shared/lib/store';
import { PayloadAction } from '@reduxjs/toolkit';
import { FormFields, RegistrationSliceSchema } from '../../types/RegistrationSliceSchema';

const initialForm = {
    username: '',
    password: '',
    first: '',
    lastname: '',
    age: 0,
    city: '',
    avatar: '',
};

const initialState: RegistrationSliceSchema = {
    form: initialForm,
    errors: [],
};

const RegistrationSlice = buildSlice({
    name: 'registration',
    initialState,
    reducers: {
        updateForm(state, action: PayloadAction<Partial<FormFields>>) {
            state.form = {
                ...state.form,
                ...action.payload
            };
        },
        resetForm(state) {
            state.form = initialForm;
            state.errors = [];
        },
        setErrors(state, action: PayloadAction<string[]>) {
            state.errors = action.payload;
        }
    }
});

export const { reducer: RegistrationReducer, actions: RegistrationActions, useActions: useRegistrationActions } = RegistrationSlice;