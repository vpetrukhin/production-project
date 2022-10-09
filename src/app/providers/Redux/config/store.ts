import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter/model/slices/CounterSlice/CounterSlice';
import { StateSchema } from '../types/StateSchema';

export function createReduxStore(initialState: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
        preloadedState: initialState,
        devTools: __IS_DEV__
    });
}