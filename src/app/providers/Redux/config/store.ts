import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entity/Counter/model/slices/CounterSlice/CounterSlice';
import { UserReducer } from 'entity/User';
import { LoginReducer } from 'feutures/AuthByUserName';
import { StateSchema } from '../types/StateSchema';

const reducer = combineReducers<StateSchema>({
    counter: counterReducer,
    user: UserReducer,
    login: LoginReducer
});

export function createReduxStore(initialState: Partial<StateSchema>) {
    return configureStore<StateSchema>({
        reducer,
        preloadedState: initialState,
        devTools: __IS_DEV__
    });
}

const store = createReduxStore({});

export type AppDispatch = typeof store.dispatch