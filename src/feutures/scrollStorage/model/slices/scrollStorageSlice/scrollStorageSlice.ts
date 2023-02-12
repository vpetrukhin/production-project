import { buildSlice } from '@/shared/lib/store';
import { PayloadAction } from '@reduxjs/toolkit';
import { ScrollStorageSchema } from '../../types/scrollstorage';


const initialState: ScrollStorageSchema = {
    scroll: {}
};

export const scrollStorageSlice = buildSlice({
    name: 'scroll',
    initialState,
    reducers: {
        setScroll: (state, { payload }: PayloadAction<{ path: string, scroll: number }>) => {
            state.scroll[payload.path] = payload.scroll;
        }
    },
});

export const { actions: ScrollStorageActions, reducer: ScrollStorageReducer, useActions: useScrollStorageActions } = scrollStorageSlice;