import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter/model/slices/CounterSlice/CounterSlice';
import { UserReducer } from 'entity/User';
import { StateSchema, StateWithReducerManager } from '../types/StateSchema';
import { createReducerManager } from './createReducerManager';

export function createReduxStore(initialState: Partial<StateSchema>, asyncReducers?: ReducersMapObject<Partial<StateSchema>>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: UserReducer,
        ...asyncReducers
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        devTools: __IS_DEV__
    }) as StateWithReducerManager;

    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];