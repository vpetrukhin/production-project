import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollStorageSchema } from '../../types/scrollstorage';


const initialState: ScrollStorageSchema = {
    scroll: {}
};

export const scrollStorageSlice = createSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScroll: (state, { payload }: PayloadAction<{ path: string, scroll: number }>) => {
            state.scroll[payload.path] = payload.scroll;
        }
    },
});

export const { actions: ScrollStorageActions } = scrollStorageSlice;
export const { reducer: ScrollStorageReducer } = scrollStorageSlice;