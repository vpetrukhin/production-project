import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter/model/slices/CounterSlice/CounterSlice';
import { UserReducer } from 'entity/User';
import { StateSchema, StateWithReducerManager } from '../types/StateSchema';
import { createReducerManager } from './createReducerManager';

export function createReduxStore(initialState: Partial<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: UserReducer,
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

const store = createReduxStore({});

export type AppDispatch = typeof store.dispatch

// export function configureStore(initialState) {
//     const reducerManager = createReducerManager(staticReducers)

//     // Create a store with the root reducer function being the one exposed by the manager.
//     const store = createStore(reducerManager.reduce, initialState)

//     // Optional: Put the reducer manager on the store so it is easily accessible
//     store.reducerManager = reducerManager
// }